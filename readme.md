# 💰 Finanz App - Landing Page

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green?logo=github)](https://tu-usuario.github.io/finanz-app-landing)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-orange)]()

> Landing page oficial para Finanz App - Tu compañero para un futuro financiero más brillante

![Finanz App Preview](assets/screenshots/preview.png)

## 📱 Acerca de Finanz App

Finanz App es una aplicación móvil desarrollada en Flutter que te ayuda a controlar tus gastos hormiga y mejorar tu salud financiera de forma sencilla, visual y moderna.

### ✨ Características Principales

- 💰 **Balance Diario**: Seguimiento diario de ingresos y gastos
- 📅 **Presupuesto Fijo**: Gestión de gastos e ingresos mensuales
- 📊 **Informes y Análisis**: Estadísticas detalladas por categoría
- 📝 **Resumen Mensual**: Historial completo de transacciones
- 🎨 **Diseño Moderno**: Interfaz intuitiva y atractiva
- 🆓 **Completamente Gratis**: Sin costos ocultos

## 🌐 Landing Page

Esta landing page está construida con tecnologías web modernas:

- **HTML5** semántico
- **CSS3** con variables personalizadas y grid/flexbox
- **JavaScript** vanilla para interactividad
- **Font Awesome** para iconografía
- **Responsive Design** para todos los dispositivos

### 🚀 Demo en Vivo

Visita la landing page: [https://tu-usuario.github.io/finanz-app-landing](https://tu-usuario.github.io/finanz-app-landing)

## 📁 Estructura del Proyecto

```
finanz-app-landing/
│
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript interactions
├── README.md               # Este archivo
├── LICENSE                 # Licencia MIT
│
└── assets/
    ├── logo/
    │   ├── logo.png         # Logo navbar (40x40px)
    │   ├── logo-hero.png    # Logo hero (120x120px)
    │   └── favicon.ico      # Favicon (32x32px)
    │
    └── screenshots/
        ├── balance-diario.png
        ├── presupuesto.png
        ├── informes.png
        └── resumen.png
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Navegador web moderno
- Editor de código (VS Code recomendado)
- Git para control de versiones

### Instalación Local

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/finanz-app-landing.git

# Navega al directorio
cd finanz-app-landing

# Abre en tu editor preferido
code .

# Sirve localmente (opcional)
# Con Python 3:
python -m http.server 8000

# Con Node.js (si tienes http-server):
npx http-server

# Visita http://localhost:8000
```

### 🚀 Deployment en GitHub Pages

1. **Fork** este repositorio
2. Ve a **Settings** → **Pages**
3. Selecciona **Source**: Deploy from branch
4. Elige **Branch**: main
5. ¡Tu landing estará disponible en minutos!

## 🎨 Personalización

### Colores

Las variables CSS están definidas en `:root`:

```css
:root {
    --primary-color: #2196F3;     /* Azul principal */
    --secondary-color: #4CAF50;   /* Verde secundario */
    --accent-color: #FF5722;      /* Naranja de acento */
    --text-color: #333;           /* Texto principal */
    --text-light: #666;           /* Texto secundario */
}
```

### Fuentes

Utiliza las fuentes del sistema por defecto:
- Primaria: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- Para íconos: Font Awesome 6.0.0

### Assets

Reemplaza las imágenes en `/assets/` con:
- **Logos**: PNG con fondo transparente
- **Screenshots**: JPG/PNG (300x500px recomendado)
- **Favicon**: ICO 32x32px

## 📱 Integración con Flutter

### Opción 1: WebView
```dart
import 'package:webview_flutter/webview_flutter.dart';

WebView(
  initialUrl: 'https://tu-usuario.github.io/finanz-app-landing',
  javascriptMode: JavascriptMode.unrestricted,
)
```

### Opción 2: Deep Links
Configura en `android/app/src/main/AndroidManifest.xml`:
```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="tu-dominio.com" />
</intent-filter>
```

## 🔧 Características Técnicas

- **Responsive**: Mobile-first design
- **SEO-friendly**: Meta tags optimizados
- **Accesibilidad**: Semantic HTML y ARIA labels
- **Performance**: CSS y JS optimizados
- **Cross-browser**: Compatible con navegadores modernos

### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📋 TODO

- [ ] Agregar animaciones con CSS/JS
- [ ] Implementar tema oscuro
- [ ] Optimizar imágenes (WebP)
- [ ] Añadir tests de accesibilidad
- [ ] Integrar analytics (Google Analytics/Plausible)
- [ ] Añadir sitemap.xml
- [ ] Implementar PWA features

## 🐛 Issues Conocidos

- Los enlaces de descarga son placeholders
- Imágenes de screenshots son mockups
- Formulario de contacto no está implementado

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/nueva-funcion`)
3. Commit tus cambios (`git commit -m 'Añade nueva función'`)
4. Push a la branch (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

### Guías de Contribución

- Mantén el código limpio y comentado
- Sigue las convenciones de naming
- Testa en múltiples dispositivos
- Actualiza la documentación si es necesario

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu.email@ejemplo.com

## 🙏 Agradecimientos

- [Font Awesome](https://fontawesome.com/) por los íconos
- [GitHub Pages](https://pages.github.com/) por el hosting gratuito
- Comunidad de Flutter por la inspiración

## 📊 Estadísticas

![GitHub stars](https://img.shields.io/github/stars/tu-usuario/finanz-app-landing?style=social)
![GitHub forks](https://img.shields.io/github/forks/tu-usuario/finanz-app-landing?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/tu-usuario/finanz-app-landing?style=social)

---

<div align="center">
  <p>⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐</p>
  <p>🔗 <a href="https://tu-usuario.github.io/finanz-app-landing">Ver Landing Page</a> | 📱 <a href="#download">Descargar App</a></p>
</div>