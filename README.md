# Booky Browser Extension

## Overview

Booky is a browser extension designed to enhance your bookmarking experience. It offers a sleek, modern interface with features like one-click bookmarking, drag-and-drop organization, dark mode, and more. The extension is compatible with all modern browsers, ensuring a seamless experience across different platforms.

## Features

- **One Click Bookmarking**: Easily bookmark your favorite pages with a single click.
- **Drag and Drop**: Organize your bookmarks effortlessly with drag-and-drop functionality.
- **Screenshots**: Automatically captures a screenshot of the bookmarked page.
- **Duplicate Handling**: Prevents duplicate bookmarks.
- **Modern Design**: Clean and intuitive interface using Bootstrap and FontAwesome.
- **Dark Mode**: Toggle dark mode for a comfortable browsing experience at night.
- **Space Efficient Design**: Uses icons efficiently to save space and improve usability.
- **Access to Browser's Bookmarks**: Access and manage your browser's bookmarks with the same slick UI.
- **Search/Filter**: Quickly find the bookmarks you need.
- **New Tab Page**: Customizable new tab page with your bookmarks organized in tiles.
- **User Interactions in Modals**: All user interactions are handled in modals for a smooth experience.
- **Pre-seeding Top Categories**: Pre-seeded with top 20 categories and top 20 links in each.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Anaconda for managing the development environment.

### Setting Up the Development Environment

I. **Clone the repository**:
`bash
    git clone https://github.com/qriz75/booky.git
    cd booky
    `

II. **Set up the Anaconda environment**:
`bash
    conda create --name booky-env
    conda activate booky-env
    conda install -c conda-forge nodejs
    `

III. **Install dependencies**:
`bash
    npm install
    `

### Loading the Extension in Chrome

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" using the toggle switch in the top-right corner.
3. Click "Load unpacked" and select the `booky` folder.
4. The Booky extension should now be loaded and ready to use.

## Usage

### Toggling Dark Mode

- Click the dark mode switch in the top-left corner of the new tab page to toggle between dark and light modes. The preference is saved and will persist across sessions.

### Adding Bookmarks

- Click on the bookmark icon to add the current page to your bookmarks. A screenshot will be automatically captured and displayed in the bookmark tile.

### Organizing Bookmarks

- Drag and drop bookmarks to organize them as desired. The changes will be saved automatically.

### Accessing Bookmarks

- Open a new tab to see your bookmarks organized by categories. Click on any bookmark tile to open the associated page.

## Development Progress

### File Structure

\```
booky/
│
├── data/
│ └── initialData.json
│
├── images/
│ ├── favicon-16x16.png
│ ├── favicon-32x32.png
│ ├── favicon-96x96.png
│ ├── favicon-128.png
│ ├── favicon-196x196.png
│ └── favicon.ico
│
├── js/
│ ├── main.js
│ ├── ui.js
│ └── toggleDarkMode.js
│
├── node_modules/
│
├── vendor/
│ ├── bootstrap.min.css
│ ├── bootstrap.min.js
│ ├── fontawesome.all.min.css
│ ├── fontawesome.all.min.js
│ ├── jquery.min.js
│ └── Sortable.min.js
│
├── LICENSE
├── manifest.json
├── newtab.html
├── package-lock.json
├── package.json
├── README.md
└── styles.css
\```

### Completion Status

**Functionality Progress**

- [x] Initial File Structure
- [x] Create files
- [x] Create folders
- [x] Update README.md with progress indicator
- [x] Grid layout (newtab.html, styles.css, ui.js)
- [x] Update `styles.css` and `ui.js`
- [x] Fetch and Display Data (main.js, utils.js)
- [x] Fetch data from initialData.json
- [x] Display data on new tab page
- [x] Horizontal scrolling in rows (styles.css)
- [x] Arrows for horizontal scrolling (styles.css)
- [x] Implement Dark Mode toggle (toggleDarkMode.js, styles.css)
- [x] Tools and Error Handling
  - [x] Implement error handling (utils.js)
  - [x] Implement modals for user interactions (modals.js)

**Remaining Tasks**

- [ ] Implement automatic screenshot functionality
- [ ] Implement duplicate bookmark handling
- [ ] Optimize space-efficient design
- [ ] Implement access to browser's native bookmarks
- [ ] Add search/filter functionality
- [ ] Finalize pre-seeded top categories
- [ ] Ensure full customization of the new tab page
