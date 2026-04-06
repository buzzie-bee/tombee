import { ImageResponse } from 'next/og';
import { getBlogPostBySlug } from '@/lib/content/blog';
import { GEIST_MONO_BOLD_BASE64 } from '@/app/_fonts/geist-mono-bold';
import { GEIST_MONO_BOLD_LATIN_BASE64 } from '@/app/_fonts/geist-mono-bold-latin';

export const runtime = 'nodejs';

export const alt = 'Blog post on tombee.io';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#0a0a0a';
const FG = '#fafafa';
const MUTED = '#a1a1a1';
const PRIMARY = '#2a6d8a';

async function loadGoogleFont(family: string, weight: number, text: string): Promise<ArrayBuffer> {
  const url =
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}` +
    `&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) {
    throw new Error(`Failed to locate TTF URL for ${family} ${weight} in Google Fonts CSS`);
  }
  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) {
    throw new Error(`Failed to download ${family} ${weight}: ${fontRes.status}`);
  }
  return fontRes.arrayBuffer();
}

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const title = post?.frontmatter.title ?? slug;
  const summary = post?.frontmatter.summary ?? '';
  const date = post?.frontmatter.date
    ? new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';
  const brand = 'tombee.io';

  // Geist Sans (Regular) is fetched from Google Fonts at build time for the
  // summary and date text. The title uses Geist Mono Bold from a locally
  // inlined Latin subset (all ASCII + extended Latin, GSUB-stripped).
  const sansText = `Blog${summary}${date}`;
  const geistSansRegular = await loadGoogleFont('Geist', 400, sansText);

  const decodeBase64Font = (b64: string): ArrayBuffer => {
    const buf = Buffer.from(b64, 'base64');
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  };
  const geistMonoBoldLatin = decodeBase64Font(GEIST_MONO_BOLD_LATIN_BASE64);
  const geistMonoBoldBrand = decodeBase64Font(GEIST_MONO_BOLD_BASE64);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: BG,
          color: FG,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div
              style={{
                width: '72px',
                height: '8px',
                backgroundColor: PRIMARY,
                borderRadius: '9999px',
              }}
            />
            <div
              style={{
                fontFamily: 'Geist Mono',
                fontWeight: 700,
                fontSize: '20px',
                textTransform: 'uppercase',
                letterSpacing: '4px',
                color: MUTED,
              }}
            >
              Blog
            </div>
          </div>
          <div
            style={{
              fontFamily: 'Geist Mono',
              fontWeight: 700,
              fontSize: '64px',
              letterSpacing: '-2px',
              lineHeight: 1.15,
              color: FG,
              maxWidth: '1040px',
            }}
          >
            {title}
          </div>
          {summary && (
            <div
              style={{
                fontFamily: 'Geist',
                fontWeight: 400,
                marginTop: '24px',
                fontSize: '28px',
                lineHeight: 1.4,
                color: MUTED,
                maxWidth: '900px',
              }}
            >
              {summary}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: '24px',
            color: MUTED,
          }}
        >
          <div style={{ fontFamily: 'Geist', fontWeight: 400 }}>{date}</div>
          <div style={{ fontFamily: 'Geist Mono Brand', fontWeight: 700, color: FG }}>{brand}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist Mono', data: geistMonoBoldLatin, weight: 700, style: 'normal' },
        { name: 'Geist', data: geistSansRegular, weight: 400, style: 'normal' },
        { name: 'Geist Mono Brand', data: geistMonoBoldBrand, weight: 700, style: 'normal' },
      ],
    },
  );
}
