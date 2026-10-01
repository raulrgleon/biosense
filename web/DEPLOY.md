# Publicar BioSense en el Dell (Coolify + Cloudflare + Tunnel)

Dos apps Coolify distintas. No mezclar dominios.

| Superficie | Dominio | Repo | App Coolify |
| --- | --- | --- | --- |
| Sitio público | `https://biosense.dev` | `raulrgleon/biosense` | App **nueva** (nginx, puerto 80) |
| Calculador / API / MCP | `https://app.biosense.dev` | `raulrgleon/biosense-simulator` | App **existente** `biosense-simulator` |

El audience OAuth es `https://app.biosense.dev/mcp`. No pongas `BIOSENSE_API_KEY` en la app del sitio.

## 1. Sitio: Coolify

1. http://192.168.1.100:8000 → proyecto DNET / production.
2. **+ New** → Application → `https://github.com/raulrgleon/biosense`.
3. Build pack: **Dockerfile** (raíz del repo; sirve `web/`).
4. **Ports Exposes:** `80`.
5. **Domains:** `https://biosense.dev` (y `https://www.biosense.dev` si lo quieres).
6. Deploy. No toques Traefik, Tunnel ni las otras apps.

## 2. Calculador: Coolify (app existente)

En `biosense-simulator` (`lkpkgcorqlvtxf2lnu0wmwcg`):

1. **Domains:** añade `https://app.biosense.dev`. Quita `tuhoy.com` cuando el subdominio responda.
2. **AUTH0_AUDIENCE:** `https://app.biosense.dev/mcp` (también el Identifier de la API en Auth0).
3. **BIOSENSE_ALLOWED_ORIGINS:** `https://app.biosense.dev,https://biosense.dev,https://www.biosense.dev`.
4. Redeploy. No le añadas `biosense.dev` a esta app.

## 3. Cloudflare DNS de `biosense.dev`

No apuntes A a la IP pública del Dell. Copia el mismo CNAME de túnel que usan los otros sitios DNET (`*.cfargotunnel.com`). Proxy naranja ON. SSL/TLS **Full (strict)**.

| Tipo | Nombre | Destino |
| --- | --- | --- |
| CNAME | `@` | `<el mismo túnel que dnet.llc>` |
| CNAME | `www` | `biosense.dev` |
| CNAME | `app` | `<el mismo túnel que dnet.llc>` |

## 4. Cloudflare Tunnel

En el túnel que ya llega al Dell, public hostnames nuevos (mismo servicio local que las otras apps Coolify):

1. `biosense.dev`
2. `www.biosense.dev` (si existe)
3. `app.biosense.dev`

No cambies los hostnames de dnet.llc ni juntto.app. `tuhoy.com` se puede dejar hasta confirmar el corte.

## 5. Comprobar

```bash
curl -I https://biosense.dev
curl -I https://app.biosense.dev/api/v1/health
```

Esperado: biosense.dev = 200 HTML. app health = 200. Sin 5xx.

## No hacer

- No poner `BIOSENSE_API_KEY` en la app del sitio.
- No adjuntar `biosense.dev` al contenedor del simulador.
- No editar Cloudflare/DNS de dnet.llc ni juntto.app.
