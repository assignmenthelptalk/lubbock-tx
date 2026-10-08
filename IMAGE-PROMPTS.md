# Image Prompts: Lubbock Elite Water Softener

31 AI image prompts (Gemini, Midjourney, DALL-E, Flux or similar), plus 3 images that should be built in code. Each prompt is self-contained: paste it as is.

## How to use

1. Generate each image and **save it in `public/` with exactly the filename shown** (for example `hero-water-softener-lubbock-tx.png`, or .jpg/.webp). Exact names mean no hand-matching afterwards.
2. Tell Claude the images are ready. It converts them to WebP, moves them to `src/assets/images/` and wires each into its page with `astro:assets`, using the alt text listed under each prompt.
3. Optionally bake the logo into the photos with `scripts/brand_images.py` (originals go in `brand_assets/unbranded-images/`).

Export size: **WebP under 1,200 px wide** (owner's rule). The sizes below are the target after export. Generate larger if the tool allows, then downscale.

## Rules these prompts follow

- **No faces.** Technicians appear from behind or as hands only, which also avoids implying real staff.
- **No text, numbers, logos or brand names.** AI lettering is unreliable. Equipment is deliberately generic and unbranded. That is also why diagrams, charts and maps are built in code (last section).
- **Local but honest.** Texas homes: slab floors, garage installs, brick ranch houses, flat South Plains horizons and big skies. No invented business claims, awards, named vehicles or real addresses. The town pictures show typical housing only; they make no claim about specific streets or homes.
- **Brand-matched colour.** Navy and copper accents echo the logo and the site palette (`#1A3C5E`, `#E87722`). Do not recolour whole images.
- **Keep the set consistent.** Generate everything in one session when you can, reuse the same garage description, and keep the same lighting style so the pages feel like one shoot.

Check each result for: stray text or logos, extra fingers, plumbing that makes no sense (pipes to nowhere, a softener with two brine tanks, a salt-free unit with a brine tank), and visible faces. Regenerate if any appear.

## One naming fix

The homepage copy and the installation page both used the file name `water-softener-installation-lubbock-tx`, but they need different pictures. This list renames the **homepage** one to `installed-softener-lubbock-tx`. The `water-softener-process-lubbock-tx` diagram is shared by both pages and is built once.


## A. Homepage (3 photos)

### `hero-water-softener-lubbock-tx`
- **Size:** 16:9 (export about 1200x675)
- **Used on:** Homepage hero, full-bleed background behind the text and form
- **Alt text (from the page copy):** Technician installing a water softener Lubbock TX home

```
A wide shot of a technician seen from behind, kneeling beside a generic, unbranded residential water softener: a tall slim navy-blue resin tank beside a squat grey brine tank with a closed lid, a digital control head on top, copper and white PEX pipe connections, which is freshly installed against the white wall of a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf. A water heater and copper supply lines are visible behind. The garage door is open to bright West Texas daylight. Compose the subject in the right half of the frame and keep the left third calm and uncluttered, with softer light, because headline text sits over it. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 16:9.
```

### `installed-softener-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** Homepage, services section (replaces the old 'water-softener-installation-lubbock-tx' name used there)
- **Alt text (from the page copy):** Installed water softener system Lubbock TX garage

```
A generic, unbranded residential water softener: a tall slim navy-blue resin tank beside a squat grey brine tank with a closed lid, a digital control head on top, copper and white PEX pipe connections, freshly installed against the wall of a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf. A water heater and copper supply lines are visible behind it. Soft light from a garage window. The softener is the clear subject, centred, with breathing room around it. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `hard-water-buildup-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** Homepage, 'Lubbock's Hard Water Problem' section
- **Alt text (from the page copy):** Hard water scale buildup on a faucet water softener Lubbock TX

```
An extreme close-up of a chrome kitchen faucet spout and aerator with a thick, chalky white limescale crust and dried water spots, a few clear water drops falling, in a clean bright kitchen with a blurred window behind. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```


## B. Social share (1 photo)

### `og-default`
- **Size:** 1.91:1 (export about 1200x630)
- **Used on:** Open Graph and social-share image (the layout already points to /og-default.jpg, which does not exist yet)
- **Alt text (from the page copy):** (social image, no alt text needed)

```
A generic, unbranded residential water softener: a tall slim navy-blue resin tank beside a squat grey brine tank with a closed lid, a digital control head on top, copper and white PEX pipe connections, freshly installed in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf, shown in the right half of the frame with a water heater behind it. Leave the left 45 percent of the frame clean and softly lit so a logo and the business name can be added on top later. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 1.91:1.
```


## C. Hub pages (2 photos)

### `water-softener-systems-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-systems/
- **Alt text (from the page copy):** Water softener systems Lubbock TX salt-based and dual-tank units

```
Two generic, unbranded water softener systems side by side in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf: on the left a single resin tank with a separate brine tank, on the right a twin-tank unit with two matching resin tanks and a shared control head. Even, flattering light, front-on view, equal scale. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-treatment-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-treatment-and-testing/
- **Alt text (from the page copy):** Water treatment Lubbock TX whole house filter and water softener setup

```
A tidy whole-home water treatment setup mounted along the wall of a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf: two large filter housings on a plywood panel feeding into a generic, unbranded residential water softener: a tall slim navy-blue resin tank beside a squat grey brine tank with a closed lid, a digital control head on top, copper and white PEX pipe connections, with neat copper pipework, shut-off valves and a pressure gauge with a blank face. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```


## D. Core service pages (2 photos)

### `water-softener-installation-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-installation/
- **Alt text (from the page copy):** Water softener installation Lubbock TX technician connecting a softener

```
Close shot of a technician's gloved hands tightening a bypass valve with a wrench on a new water softener in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf; copper and white PEX pipe, a drain hose with an air gap, and the softener tanks blurred behind. The technician wears a plain dark-navy work shirt with no logos. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-softener-replacement-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-replacement/
- **Alt text (from the page copy):** Water softener replacement Lubbock TX old and new unit

```
In a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf, an old, stained and slightly corroded water softener tank sits on a hand truck ready to be removed, while a clean new generic unit stands beside it. A technician is seen from behind, from the shoulders down. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```


## E. Service pages (13 photos)

### `salt-free-water-softener-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /salt-free-water-softener-systems/
- **Alt text (from the page copy):** Salt-free water softener Lubbock TX conditioner on main water line

```
A single slim stainless-and-navy salt-free water conditioner canister mounted on the main water line of a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf, with no brine tank and no drain hose, a copper bypass loop and shut-off valves. A small electronic descaler coil is wrapped around the copper pipe beside it. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `dual-tank-water-softener-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /dual-tank-water-softener/
- **Alt text (from the page copy):** Dual tank water softener Lubbock TX twin resin tanks

```
A generic, unbranded dual-tank water softener: two identical tall resin tanks standing side by side joined by a shared control valve, with a brine tank behind them, in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf. Symmetrical, front-on, evenly lit. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `commercial-water-softener-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /commercial-water-softener/
- **Alt text (from the page copy):** Commercial water softener Lubbock TX high-flow system in a mechanical room

```
A clean commercial mechanical room with two large, generic fibreglass water softener tanks and a stainless manifold, a floor drain, a commercial water heater and boiler in the background, neat labelled-free pipework and a concrete floor. A technician is seen from behind in the far background. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-softener-maintenance-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-maintenance/
- **Alt text (from the page copy):** Water softener maintenance Lubbock TX technician checking brine tank

```
A technician's gloved hands lifting the lid of a brine tank and pouring salt pellets from a plain white unmarked bag, on a softener in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf. A flashlight rests nearby. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-softener-repair-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-repair/
- **Alt text (from the page copy):** Water softener repair Lubbock TX technician servicing a control valve

```
Close shot of a technician's hands holding the opened control head of a water softener, with the small motor, valve and injector parts laid out neatly on a clean towel on top of the brine tank, in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf. Hand tools nearby. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-conditioner-installation-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-conditioner-installation/
- **Alt text (from the page copy):** Water conditioner installation Lubbock TX on a main water line

```
A compact water conditioner unit and a small scale-inhibitor feeder installed ahead of a water heater on the main line in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf, with copper pipe, shut-off valves and a technician's hands adjusting a valve. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-filtration-systems-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-filtration-systems/
- **Alt text (from the page copy):** Water filtration systems Lubbock TX whole house filter installation

```
Two large whole-house filter housings (a sediment stage and a carbon stage) mounted on a plywood panel on the wall of a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf, copper pipework, pressure gauges with blank faces, and a technician's hands tightening a housing with a wrench. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `well-water-softener-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /well-water-softener-lubbock-tx/
- **Alt text (from the page copy):** Well water softener Lubbock TX pressure tank with softener and iron filter

```
Inside a tidy rural pump-house on the Texas South Plains: a blue steel pressure tank, a tall iron-filter tower and a generic water softener in a row with neat pipework, a sediment filter housing, a clean concrete floor and a small open doorway showing a flat dry-grass horizon under a big sky. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-contaminant-removal-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-contaminant-removal-lubbock-tx/
- **Alt text (from the page copy):** Water contaminant removal Lubbock TX filter installation

```
A technician's hands fitting a new carbon-block filter cartridge into an open under-sink filter housing, with a row of spare cartridges and a pair of small unlabelled glass sample bottles on the cabinet floor beside it. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `reverse-osmosis-installation-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /reverse-osmosis-installation/
- **Alt text (from the page copy):** Reverse osmosis installation Lubbock TX under sink system

```
The inside of a clean kitchen sink cabinet showing a compact under-sink reverse osmosis system: three cylindrical filter cartridges, a small storage tank, tidy tubing and a technician's hands connecting a line. A slim dedicated faucet is visible on the sink above. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `uv-water-purification-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /uv-water-purification/
- **Alt text (from the page copy):** UV water purification Lubbock TX ultraviolet system on a main line

```
A horizontal stainless-steel UV purification chamber mounted on a panel after a sediment filter housing on the main line in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf, with a faint cool-blue glow at the end cap and neat copper and white PEX pipework. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `drinking-water-systems-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /drinking-water-systems/
- **Alt text (from the page copy):** Drinking water systems Lubbock TX under sink purification unit

```
A bright modern kitchen with a slim dedicated drinking-water faucet beside the main tap and a compact countertop purification unit; a person seen only as hands from the side fills a clear glass with water. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-quality-testing-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-quality-testing/
- **Alt text (from the page copy):** Water quality testing Lubbock TX technician testing tap water

```
A technician's hands holding a small clear test vial of tap water against a kitchen faucet, test strips and a handheld digital meter with a blank screen on the counter beside a notepad with abstract blank lines. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```


## F. Guide pages (6 photos)

### `water-softener-guides-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-guides/
- **Alt text (from the page copy):** Water softener guides Lubbock TX homeowner reading about hard water

```
A homeowner seen from behind at a sunlit kitchen table with a laptop (screen facing away from the camera), a glass of water and a notepad; the tap in the sink behind shows faint scale spots. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `hard-water-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-guides/hard-water-lubbock-tx/
- **Alt text (from the page copy):** Hard water scale on a faucet in a Lubbock TX home water softener needed

```
A bright bathroom with a glass shower door covered in white water spots, and a chrome showerhead and faucet with chalky limescale, shot at a slight angle in soft morning light. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `salt-vs-salt-free-water-softener-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-guides/salt-vs-salt-free-water-softener/
- **Alt text (from the page copy):** Salt vs salt-free water softener Lubbock TX side by side comparison

```
Two generic, unbranded units side by side in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf under identical lighting: on the left a salt-based softener with a resin tank and a brine tank, on the right a single slim salt-free conditioner canister with no brine tank. Front-on, equal scale, a clear gap between them. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `how-long-do-water-softeners-last-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-guides/how-long-do-water-softeners-last/
- **Alt text (from the page copy):** Aging water softener Lubbock TX tank and control head inspection

```
An older generic water softener in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf: slightly yellowed control head, faint rust and mineral stains at the tank base, salt crust on the brine tank rim, and a technician's gloved hand inspecting the control head. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `signs-you-need-a-new-water-softener-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-guides/signs-you-need-a-new-water-softener/
- **Alt text (from the page copy):** Signs you need a new water softener Lubbock TX scale on faucet and leaking tank

```
In the foreground, a close view of a chrome faucet with a heavy white limescale crust; in the softly blurred background, an old water softener in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf with a small puddle at the base of its tank. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-softener-cost-lubbock-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-guides/water-softener-cost-lubbock-tx/
- **Alt text (from the page copy):** Water softener cost Lubbock TX installed softener and itemized quote

```
A technician's hands holding a clipboard with a blank itemised form (ruled lines only, no writing) in front of a newly installed generic water softener in a tidy Texas home garage with a painted concrete slab floor, white walls and a storage shelf; a calculator with a blank display rests on the shelf. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```


## G. Town and neighbourhood pages (4 photos)

### `water-softener-tech-terrace-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-tech-terrace-tx/
- **Alt text (from the page copy):** Water softener Tech Terrace TX older home utility room installation

```
The utility closet and attached garage of a mid-century (1940s) brick cottage in West Texas: a compact generic water softener beside an older water heater, older copper and galvanised pipe runs, and a technician's hands tightening a fitting. Slightly worn but tidy, warm light. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-softener-overton-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-overton-tx/
- **Alt text (from the page copy):** Water softener Overton TX historic home and townhome installation

```
A tree-lined street at golden hour in an inner-city Texas neighbourhood: on the left a century-old wooden bungalow with a deep front porch, on the right a modern two-storey brick-and-stucco townhome. No signs, no vehicles with markings, no people. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-softener-plainview-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-plainview-tx/
- **Alt text (from the page copy):** Water softener Plainview TX home installation

```
A single-storey brick ranch home on a wide flat lot on the Texas High Plains with a two-car garage door open to show a generic water softener inside, a flat farmland horizon with a distant irrigation pivot and a big blue sky behind the house. No people. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```

### `water-softener-shallowater-tx`
- **Size:** 3:2 (export about 1200x800)
- **Used on:** /water-softener-shallowater-tx/
- **Alt text (from the page copy):** Water softener Shallowater TX home installation

```
A quiet small-town Texas street on the South Plains with modest brick and frame single-storey homes, a wide flat road, dry grass lawns and a farm-field horizon under a big sky; one garage is open and a generic water softener is just visible inside. No people, no vehicles with markings. Photorealistic editorial photograph, natural daylight, shallow depth of field, clean modern composition, muted deep navy-blue and warm copper colour accents, crisp detail, high resolution. Absolutely no text, lettering, numbers, logos, watermarks or brand names anywhere in the image; any screen, dial, gauge, label or paper shows blank or abstract content. No visible faces: any person is shown from behind, from the shoulders down, or as hands only. All equipment is generic and unbranded. Aspect ratio 3:2.
```


## H. Build in code, not with AI (3 images)

AI image tools garble lettering, so these three need real text and are better as components. Tell Claude when you want them built.

### `water-softener-process-lubbock-tx`
- **Used on:** Homepage 'Our Simple 4-Step Water Softener Installation Process' and the installation page
- **Alt text:** Water softener Lubbock TX installation steps diagram
- **Spec:** A clean four-step horizontal diagram in the site colours (navy #1A3C5E, orange #E87722): 1 Free Consultation, 2 Water Testing and System Recommendation, 3 Professional Installation, 4 Ongoing Support and Maintenance. Build as an inline SVG or Astro component with real, selectable text. AI generators misspell lettering, so do not generate this.

### `water-softener-size-guide-lubbock-tx`
- **Used on:** /water-softener-guides/water-softener-size-guide/
- **Alt text:** Water softener size guide Lubbock TX grain capacity chart
- **Spec:** The size table (24,000 / 32,000 / 48,000 / 64,000 grains against household size) as a styled chart, plus the sizing formula, ideally with a small calculator (people, hardness gpg, iron). Build in code with real text.

### `water-softener-service-areas-lubbock-tx`
- **Used on:** /service-areas/
- **Alt text:** Water softener service areas Lubbock TX map of the South Plains
- **Spec:** An interactive or static map of Lubbock and the surrounding towns. Use the boilerplate's CityMap pattern with OpenStreetMap tiles and the CSS invert filter on .leaflet-tile-pane only (never CARTO or Stadia, which now need API keys). Pins only for towns that have a published page.


## Already done

- **Logo:** `brand_assets/logo-lubbock-elite-original.png` and the transparent header version in `src/assets/logo.png`.
- **Favicon:** the square mark in `public/favicon.png`.

## Summary

| Group | Count |
|---|---|
| Homepage photos | 3 (plus the shared process diagram) |
| Social share image | 1 |
| Hub pages | 2 |
| Core service pages | 2 |
| Service pages | 13 |
| Guide pages | 6 (plus the size chart) |
| Town pages | 4 (plus the service-areas map) |
| **AI photos in total** | **31** |
| Built in code | 3 |

Hero images are 16:9, content images are 3:2, and the social image is 1.91:1.
