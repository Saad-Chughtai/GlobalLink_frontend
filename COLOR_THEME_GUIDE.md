# Fortuna Admissions - Color Theme Guide

## New Theme Colors

### 🔵 Primary Dark Blue (Text + Link Icon)
- **Hex:** `#1E2A4A`
- **RGB:** `30, 42, 74`
- **CSS Variable:** `--primary-dark-blue`
- **Use for:**
  - Logo text "GLOBAL"
  - Headers
  - Primary buttons
  - Icons
  - Main text color

### 🔵 Secondary Navy Blue (Globe + Depth Areas)
- **Hex:** `#0F3A5F`
- **RGB:** `15, 58, 95`
- **CSS Variable:** `--secondary-navy-blue`
- **Use for:**
  - Background accents
  - Footer
  - Hover states
  - Globe details

### 🟢 Primary Green (Link + "INK" text)
- **Hex:** `#63B54A`
- **RGB:** `99, 181, 74`
- **CSS Variable:** `--primary-green`
- **Use for:**
  - Highlighted text ("INK")
  - Call-to-action buttons
  - Success states
  - Active elements
  - Links

### 🟢 Soft Light Green (Gradient / Accent)
- **Hex:** `#8FD26A`
- **RGB:** `143, 210, 106`
- **CSS Variable:** `--soft-light-green`
- **Use for:**
  - Hover effects
  - Subtle gradients
  - Cards / badges

### ⚪ White (Background)
- **Hex:** `#FFFFFF`
- **CSS Variable:** `--white`
- **Use for:**
  - Main background
  - Clean spacing
  - Contrast support

### ⚫ Soft Shadow Gray (Optional UI Shadow)
- **Hex:** `#E6E8EC`
- **RGB:** `230, 232, 236`
- **CSS Variable:** `--soft-shadow-gray`
- **Use for:**
  - Borders
  - Dividers
  - Card shadows

## CSS Variable Mappings

### Button Colors
```css
--button-primary: var(--primary-dark-blue);
--button-primary-hover: var(--secondary-navy-blue);
--button-cta: var(--primary-green);
--button-cta-hover: var(--soft-light-green);
```

### Layout Colors
```css
--header-bg: var(--primary-dark-blue);
--footer-bg: var(--secondary-navy-blue);
--border-color: var(--soft-shadow-gray);
--card-shadow: var(--soft-shadow-gray);
```

### Interactive Colors
```css
--link-color: var(--primary-green);
--link-hover: var(--soft-light-green);
--active-state: var(--primary-green);
```

### Text Colors
```css
--text-color: var(--primary-dark-blue);
--text-secondary: var(--secondary-navy-blue);
```

## Updated Components

The following components have been updated with the new color scheme:

1. **CSS Variables** (`src/styles/variables.css`)
   - All primary color definitions
   - Shadow colors updated to use soft gray
   - New semantic color mappings

2. **Header** (`src/components/layout/Header.css`)
   - Logo colors updated to use primary dark blue and green
   - Navigation hover states use green
   - CTA buttons use green theme

3. **Footer** (`src/components/layout/Footer.css`)
   - Background uses secondary navy blue
   - Logo colors match header

4. **Buttons** (`src/components/common/Button.css`)
   - Primary buttons use dark blue
   - Secondary buttons use green
   - Hover states updated

5. **Cards** (`src/components/common/Card.css`)
   - Borders use soft shadow gray
   - Focus states use primary colors

6. **Forms** (`src/components/forms/FinalForm.css`)
   - Borders use soft shadow gray
   - Focus states use primary colors

7. **Hero Section** (`src/components/home/Hero.css`)
   - Background gradient uses new color palette
   - CTA buttons use primary dark blue

## Usage Guidelines

### Primary Actions
Use **Primary Green** (`#63B54A`) for:
- Call-to-action buttons
- Important links
- Success indicators
- Active navigation items

### Secondary Actions
Use **Primary Dark Blue** (`#1E2A4A`) for:
- Primary buttons
- Headers
- Main text
- Logo text

### Backgrounds & Depth
Use **Secondary Navy Blue** (`#0F3A5F`) for:
- Footer background
- Hover states
- Background accents
- Creating visual depth

### Subtle Elements
Use **Soft Shadow Gray** (`#E6E8EC`) for:
- Borders
- Dividers
- Card shadows
- Subtle UI elements

## Implementation Notes

- All shadow variables have been updated to use the soft shadow gray with appropriate opacity
- The gradient background now uses the new color palette
- Focus states and accessibility colors have been maintained
- All existing CSS variable names are preserved for backward compatibility