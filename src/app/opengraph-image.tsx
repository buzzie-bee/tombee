import { ImageResponse } from 'next/og';
import { GEIST_MONO_BOLD_BASE64 } from './_fonts/geist-mono-bold';
import { GEIST_MONO_MEDIUM_BASE64 } from './_fonts/geist-mono-medium';

export const runtime = 'nodejs';

export const alt = 'Tom Bee - Fullstack TypeScript Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Hex approximations of the site's dark-theme tokens - Satori (next/og) does
// not understand OKLCH, so we convert the design-system values here.
const BG = '#0a0a0a';
const FG = '#fafafa';
const MUTED = '#a1a1a1';
const PRIMARY = '#2a6d8a';

// Fetches a Google Font as a raw TTF buffer for Satori. Uses the documented
// `&text=` subset trick: when a `text` param is supplied, Google Fonts returns
// a TTF format URL (otherwise it returns WOFF2, which Satori does not support).
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

export default async function OpengraphImage() {
  const title = 'Tom Bee';
  const tagline = 'Fullstack TypeScript Engineer';
  const description =
    'Production-ready web applications, built with a focus on developer velocity, scalable systems, and UX that delights.';
  const brand = 'tombee.io';

  // Title + tagline are rendered in Geist Sans rather than Geist Mono. Mono
  // looked awkward at display sizes (uniform glyph widths leave visible gaps
  // around narrow letters like `T`), and Geist Mono's TTF trips a Satori
  // opentype.js bug at its standard form anyway.
  //
  // The `tombee.io` brand tag still uses Geist Mono - we bundle a locally
  // GSUB-stripped subset of GeistMono-Bold.ttf (just the glyphs for
  // `tombee.io`) so Satori can parse it. See `temp/docs/og-fonts.md` for how
  // the stripped file was produced.
  const allSansText = `${title}${tagline}${description}`;
  const [geistSansBold, geistSansMedium, geistSansRegular] = await Promise.all([
    loadGoogleFont('Geist', 700, allSansText),
    loadGoogleFont('Geist', 500, allSansText),
    loadGoogleFont('Geist', 400, allSansText),
  ]);
  // Decode the inlined stripped-subset Geist Mono weights to ArrayBuffers for
  // Satori. Buffer.from(..., 'base64') produces a Node Buffer whose underlying
  // ArrayBuffer may be larger than the data, so we slice to the exact range.
  const decodeBase64Font = (b64: string): ArrayBuffer => {
    const buf = Buffer.from(b64, 'base64');
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  };
  const geistMonoBold = decodeBase64Font(GEIST_MONO_BOLD_BASE64);
  const geistMonoMedium = decodeBase64Font(GEIST_MONO_MEDIUM_BASE64);

  return new ImageResponse(
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
        <div
          style={{
            width: '72px',
            height: '8px',
            backgroundColor: PRIMARY,
            borderRadius: '9999px',
            marginBottom: '32px',
          }}
        />
        <div
          style={{
            fontFamily: 'Geist',
            fontWeight: 700,
            fontSize: '180px',
            letterSpacing: '-6px',
            lineHeight: 1,
            color: FG,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'Geist Mono',
            fontWeight: 500,
            marginTop: '28px',
            fontSize: '40px',
            color: PRIMARY,
          }}
        >
          {tagline}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: '28px',
          color: MUTED,
        }}
      >
        <div
          style={{
            fontFamily: 'Geist',
            fontWeight: 400,
            maxWidth: '720px',
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
        <div
          style={{
            fontFamily: 'Geist Mono',
            fontWeight: 700,
            color: FG,
          }}
        >
          {brand}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Geist', data: geistSansBold, weight: 700, style: 'normal' },
        { name: 'Geist', data: geistSansMedium, weight: 500, style: 'normal' },
        { name: 'Geist', data: geistSansRegular, weight: 400, style: 'normal' },
        { name: 'Geist Mono', data: geistMonoBold, weight: 700, style: 'normal' },
        { name: 'Geist Mono', data: geistMonoMedium, weight: 500, style: 'normal' },
      ],
    },
  );
}
