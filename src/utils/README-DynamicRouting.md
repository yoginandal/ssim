# Dynamic Routing System Documentation

## Overview

The dynamic routing system automatically generates page titles and breadcrumbs based on the current route, eliminating the need to hardcode these values for each route.

## How It Works

### 1. Route Configuration (`src/utils/routeConfig.js`)

All route metadata is centralized in a configuration object:

```javascript
export const routeConfigs = {
  about: {
    baseTitle: "About SSIM",
    basePath: "/about",
    routes: {
      "directors-message": {
        title: "Director's Message",
        breadcrumbLabel: "Director's Message"
      },
      // ... more routes
    }
  }
  // ... more sections
};
```

### 2. Dynamic Layout Component (`AboutLayout.jsx`)

The `AboutLayout` component automatically:
- Detects the current route using `useLocation`
- Looks up the appropriate configuration
- Generates dynamic titles and breadcrumbs
- Creates dropdown menus for navigation

## Adding New Sections

### Step 1: Add Route Configuration

Add your new section to `routeConfigs` in `src/utils/routeConfig.js`:

```javascript
export const routeConfigs = {
  // ... existing sections
  
  // New Section
  'student-life': {
    baseTitle: "Student Life",
    basePath: "/student-life",
    routes: {
      "events": {
        title: "Campus Events",
        breadcrumbLabel: "Campus Events"
      },
      "clubs": {
        title: "Student Clubs",
        breadcrumbLabel: "Student Clubs"
      },
      "achievements": {
        title: "Student Achievements", 
        breadcrumbLabel: "Student Achievements"
      }
    }
  }
};
```

### Step 2: Add Routes in App.jsx

Use the simplified route definition:

```javascript
// Add sidebar links (optional)
const studentLifeSidebarLinks = [
  { href: "/student-life/events", label: "Campus Events" },
  { href: "/student-life/clubs", label: "Student Clubs" },
  { href: "/student-life/achievements", label: "Student Achievements" },
];

// Add route
<Route 
  path="/student-life"
  element={
    <AboutLayout 
      bannerImage={StudentLifeBanner} // Add custom banner
      showDropdown={true}             // Enable dropdown navigation
      sidebarLinks={studentLifeSidebarLinks}
      showSidebar={false}             // Hide/show sidebar
    />
  }
>
  <Route path="" element={<Navigate to="events" replace />} />
  <Route path="events" element={<CampusEvents />} />
  <Route path="clubs" element={<StudentClubs />} />
  <Route path="achievements" element={<StudentAchievements />} />
</Route>
```

## Route Examples

### Current Working Routes

1. **About Section**: `/about/academic-advisory-board`
   - Title: "Academic Advisory Board"
   - Breadcrumbs: Home > About > Academic Advisory Board

2. **Placement Section**: `/placement/internships`
   - Title: "Internships" 
   - Breadcrumbs: Home > Placements > Internships

3. **Faculty Section**: `/faculty/areas`
   - Title: "Areas of Expertise"
   - Breadcrumbs: Home > Faculty & Research > Areas of Expertise

## Props for AboutLayout

### Required Props
- `bannerImage`: Custom banner image for the section

### Optional Props
- `showDropdown`: Enable/disable dropdown navigation (default: false)
- `showSidebar`: Show/hide sidebar navigation (default: false)  
- `sidebarLinks`: Array of sidebar navigation links
- `customTitle`: Override auto-generated title
- `customBreadcrumbs`: Override auto-generated breadcrumbs
- `customDropdownLinks`: Override auto-generated dropdown links

## Benefits

1. **No Hardcoding**: Titles and breadcrumbs are generated automatically
2. **Centralized Management**: All route metadata in one place
3. **Easy Maintenance**: Add new routes by just updating the config
4. **Consistent UX**: Automatic scroll-to-top and consistent navigation
5. **Type Safety**: Easy to extend with TypeScript if needed

## Auto-Generated Features

- **Dynamic Titles**: Based on current route
- **Smart Breadcrumbs**: Automatically generated navigation path
- **Dropdown Menus**: Auto-populated from route configuration
- **Scroll to Top**: Smooth scroll when navigating between routes

## Example Usage in Components

```javascript
// Simple usage - everything auto-generated
<AboutLayout bannerImage={CustomBanner} />

// With dropdown navigation
<AboutLayout 
  bannerImage={CustomBanner}
  showDropdown={true}
/>

// With sidebar navigation
<AboutLayout 
  bannerImage={CustomBanner}
  sidebarLinks={customSidebarLinks}
  showSidebar={true}
/>

// With custom overrides
<AboutLayout 
  bannerImage={CustomBanner}
  customTitle="Custom Page Title"
  customBreadcrumbs={[
    { href: "/", label: "Home", isActive: false },
    { label: "Custom Page", isActive: true }
  ]}
/>
```

This system provides maximum flexibility while maintaining simplicity and consistency across your application. 