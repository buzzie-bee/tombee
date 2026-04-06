import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getProjectBySlug } from '@/lib/content/projects';
import { GEIST_MONO_BOLD_BASE64 } from '@/app/_fonts/geist-mono-bold';
import { GEIST_MONO_BOLD_LATIN_BASE64 } from '@/app/_fonts/geist-mono-bold-latin';

export const runtime = 'nodejs';

export const alt = 'Project on tombee.io';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FG = '#fafafa';
const MUTED = '#a1a1a1';

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

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.frontmatter.title ?? slug;
  const description = project?.frontmatter.description ?? '';
  const imagePath = project?.frontmatter.image;
  const brand = 'tombee.io';

  // Load the project hero image from disk as a base64 data URL. Satori
  // supports <img src="data:..."> which avoids needing an HTTP fetch to
  // localhost (which doesn't exist at build time).
  let imageDataUrl: string | null = null;
  if (imagePath) {
    try {
      const absPath = path.join(process.cwd(), 'public', imagePath);
      const buf = await readFile(absPath);
      const ext = path.extname(imagePath).slice(1).toLowerCase();
      const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : `image/${ext}`;
      imageDataUrl = `data:${mime};base64,${buf.toString('base64')}`;
    } catch {
      // Image missing - fall back to no-image card
    }
  }

  const sansText = `${description}`;
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
          position: 'relative',
          backgroundColor: '#0a0a0a',
        }}
      >
        {/* Project hero image - full bleed */}
        {imageDataUrl && (
          <img
            src={imageDataUrl}
            alt=""
            width={1200}
            height={630}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}

        {/* Gradient overlay - dark at bottom for text legibility */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.92) 100%)',
          }}
        />

        {/* Content layer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontFamily: 'Geist Mono',
              fontWeight: 700,
              fontSize: '56px',
              letterSpacing: '-1px',
              lineHeight: 1.15,
              color: FG,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontFamily: 'Geist',
                fontWeight: 400,
                marginTop: '16px',
                fontSize: '24px',
                lineHeight: 1.4,
                color: MUTED,
                maxWidth: '800px',
              }}
            >
              {description}
            </div>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '24px',
              fontFamily: 'Geist Mono Brand',
              fontWeight: 700,
              fontSize: '24px',
              color: FG,
            }}
          >
            {brand}
          </div>
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
