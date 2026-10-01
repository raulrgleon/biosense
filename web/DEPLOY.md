# Publicar biosense.dev en el Dell (Coolify + Cloudflare + Tunnel)

Misma receta que tuhoy.com / dnet.llc. **App Coolify nueva.** No añadas `biosense.dev` al contenedor de `biosense-simulator`. El MCP y OAuth se quedan en `https://tuhoy.com/mcp`.

## 1. Repositorio

Sube esta carpeta a GitHub (repo nuevo, por ejemplo `raulrgleon/biosense-web`). Coolify construye desde el `Dockerfile`.

## 2. Coolify (solo esta app)

1. http://192.168.1.100:8000 → proyecto DNET / production.
2. **+ New** → Application → el repo de este sitio.
3. Build pack: **Dockerfile**.
4. **Ports Exposes:** `80`.
5. **Domains:** `https://biosense.dev` (y `https://www.biosense.dev` si lo quieres).
6. Deploy. No toques Traefik, Tunnel ni las otras apps.

Cuando el contenedor esté Running, Coolify/Traefik ya escuchan el hostname interno. Falta el DNS público.

## 3. Cloudflare (dominio nuevo)

1. Cloudflare → **Add a site** → `biosense.dev`.
2. Plan Free.
3. Cloudflare te da dos nameservers. Ponlos en el registrador donde compraste el dominio (el panel de compra, no el de tuhoy.com).
4. Espera a que el dominio aparezca **Active**.

## 4. DNS hacia el Tunnel (como tus otros sitios)

No apuntes A a la IP pública del Dell.

En Cloudflare DNS de `biosense.dev`, copia **el mismo CNAME de túnel** que usa `tuhoy.com` o `dnet.llc` (el destino `*.cfargotunnel.com`).

Registros típicos (Proxy naranja ON):

| Tipo | Nombre | Destino |
| --- | --- | --- |
| CNAME | `@` | `<el mismo túnel que tuhoy.com>` |
| CNAME | `www` | `biosense.dev` |

SSL/TLS: **Full (strict)**, igual que el resto.

## 5. Cloudflare Tunnel (un hostname más)

En el túnel que ya llega al Dell:

1. **Public hostname** nuevo: `biosense.dev`.
2. Servicio: el mismo destino local que usan las otras apps Coolify (normalmente el proxy Traefik de Coolify, `http://<coolify-proxy>:80`).
3. Repite para `www.biosense.dev` si lo creaste.

No cambies los hostnames de tuhoy.com, dnet.llc ni juntto.app.

## 6. Comprobar

```bash
curl -I https://biosense.dev
curl -I https://tuhoy.com/api/v1/health
```

Esperado: biosense.dev = 200 HTML. tuhoy health = 200. Sin 5xx.

## No hacer

- No mover el audience OAuth a biosense.dev.
- No poner BIOSENSE_API_KEY en esta app.
- No editar Cloudflare/DNS de tuhoy.com para “aprovechar” el dominio.
