#!/bin/bash

# Script untuk mengupdate semua path assets di components
echo "Updating asset paths for GitHub Pages..."

# Update Projects.tsx
sed -i 's|"assets/images/|"./assets/images/|g' src/components/Projects.tsx
sed -i 's|"assets/icon/|"./assets/icon/|g' src/components/Projects.tsx

# Update Skills.tsx jika ada
if [ -f src/components/Skills.tsx ]; then
    sed -i 's|"assets/|"./assets/|g' src/components/Skills.tsx
fi

# Update komponen lain yang mungkin menggunakan assets
find src/components -name "*.tsx" -exec sed -i 's|src="assets/|src="./assets/|g' {} \;
find src/components -name "*.tsx" -exec sed -i 's|href="assets/|href="./assets/|g' {} \;

echo "Asset paths updated successfully!"
