# 🚀 Guía de Deployment a GitHub Pages

## Pasos para subir SUNTHERS a GitHub Pages

### 1. Preparación del Repositorio

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit: SUNTHERS Guild Website"

# Crear repositorio en GitHub (usa el nombre 'webwarbone' o el que prefieras)
# Luego conecta tu repo local:
git remote add origin https://github.com/TU_USUARIO/webwarbone.git

# Subir a GitHub
git push -u origin main
```

### 2. Configurar GitHub Pages

**Opción A: Usando GitHub Actions (Recomendado)**

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En "Build and deployment", selecciona **GitHub Actions**
4. Crea el archivo `.github/workflows/deploy.yml` (ver abajo)

**Opción B: Usando gh-pages (Manual)**

```bash
# Instalar gh-pages (ya instalado)
npm install --save-dev gh-pages

# Compilar y deployar
npm run deploy
```

### 3. Archivo de GitHub Actions (Recomendado)

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Consideraciones Importantes

#### ⚠️ Configuración de `vite.config.ts`

Asegúrate de que `base` coincida con el nombre de tu repositorio:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/webwarbone/', // ← DEBE ser el nombre de tu repo
})
```

Si tu repositorio se llama diferente, cámbialo:
- Repo: `sunthers-guild` → `base: '/sunthers-guild/'`
- Repo: `warborne-guild` → `base: '/warborne-guild/'`

#### 📝 Archivo `.gitignore`

Verifica que tengas estos en `.gitignore`:

```
node_modules
dist
.env
*.log
.vite
```

### 5. Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview

# Deploy a GitHub Pages (opción manual)
npm run deploy
```

### 6. URLs Finales

Después del deployment, tu sitio estará en:

- **Con GitHub Actions**: `https://TU_USUARIO.github.io/webwarbone/`
- **Con gh-pages**: `https://TU_USUARIO.github.io/webwarbone/`

### 7. Troubleshooting

**Problema: Página en blanco**
- Verifica que `base` en `vite.config.ts` sea correcto
- Asegúrate de que compilaste con `npm run build`

**Problema: CSS no carga**
- Verifica que todas las rutas sean relativas
- Confirma que Tailwind esté configurado correctamente

**Problema: 404 en rutas**
- GitHub Pages no soporta SPA routing por defecto
- Agrega un archivo `404.html` que redirija a `index.html` (opcional)

### 8. Actualizaciones Futuras

```bash
# Hacer cambios
git add .
git commit -m "Update: descripción de cambios"
git push

# Si usas gh-pages manual:
npm run deploy
```

## ✅ Checklist Pre-Deploy

- [ ] `vite.config.ts` tiene `base` correcto
- [ ] `.gitignore` está configurado
- [ ] `npm run build` funciona sin errores
- [ ] Repositorio creado en GitHub
- [ ] GitHub Pages configurado en settings
- [ ] (Opcional) GitHub Actions workflow creado

---

**¡Listo para conquistar la web, SUNTHERS!** 🔥
