# Cloudflare DNS Setup for criticalengineer.ai

## Overview
GitHub Pages hosts static sites at specific IP addresses. You need to point your domain to these IPs via DNS records.

**Domain:** `criticalengineer.ai`

---

## Step-by-Step Setup

### 1. Log into Cloudflare Dashboard
- Go to https://dash.cloudflare.com/
- Select the `criticalengineer.ai` domain

### 2. Navigate to DNS Records
- Click **DNS** in the left sidebar
- You'll see existing records (if any)
- You need to add 9 new records total

---

## A Records (IPv4) — 4 records

These point the apex domain (bare `criticalengineer.ai`) to GitHub Pages.

**Record 1:**
- **Type:** A
- **Name:** @ (this means the root/apex)
- **IPv4 address:** 185.199.108.153
- **TTL:** Auto (Cloudflare default)
- **Proxy status:** DNS only (⚠️ GREY CLOUD, not orange)
- **Click:** Save

**Record 2:**
- **Type:** A
- **Name:** @
- **IPv4 address:** 185.199.109.153
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

**Record 3:**
- **Type:** A
- **Name:** @
- **IPv4 address:** 185.199.110.153
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

**Record 4:**
- **Type:** A
- **Name:** @
- **IPv4 address:** 185.199.111.153
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

---

## AAAA Records (IPv6) — 4 records

These are the IPv6 equivalents. Add these the same way.

**Record 1:**
- **Type:** AAAA
- **Name:** @
- **IPv6 address:** 2606:50c0:8000::153
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

**Record 2:**
- **Type:** AAAA
- **Name:** @
- **IPv6 address:** 2606:50c0:8001::153
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

**Record 3:**
- **Type:** AAAA
- **Name:** @
- **IPv6 address:** 2606:50c0:8002::153
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

**Record 4:**
- **Type:** AAAA
- **Name:** @
- **IPv6 address:** 2606:50c0:8003::153
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

---

## CNAME Record (www subdomain) — 1 record

This makes `www.criticalengineer.ai` redirect to the apex.

**Record:**
- **Type:** CNAME
- **Name:** www
- **Target:** critical-engineer.github.io
- **TTL:** Auto
- **Proxy status:** DNS only (GREY)
- **Click:** Save

---

## Verification

After adding all 9 records, you should see:

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| AAAA | @ | 2606:50c0:8000::153 | DNS only |
| AAAA | @ | 2606:50c0:8001::153 | DNS only |
| AAAA | @ | 2606:50c0:8002::153 | DNS only |
| AAAA | @ | 2606:50c0:8003::153 | DNS only |
| CNAME | www | critical-engineer.github.io | DNS only |

---

## ⚠️ CRITICAL: Proxy Status

**All records must be set to "DNS only" (grey cloud icon).**

❌ **DO NOT** set to "Proxied" (orange cloud icon)

Why? GitHub Pages handles TLS/SSL itself. If Cloudflare proxies the connection, it can interfere with certificate issuance and cause HTTPS to fail.

---

## Testing

Once records are added, test with:

```bash
# Check A records
nslookup criticalengineer.ai

# Check AAAA records
nslookup -type=AAAA criticalengineer.ai

# Check www CNAME
nslookup www.criticalengineer.ai
```

Expected output:
- `criticalengineer.ai` should resolve to one of the GitHub IPs
- `www.criticalengineer.ai` should resolve to `critical-engineer.github.io`

---

## Propagation Time

DNS changes can take **up to 48 hours** to propagate globally, but usually resolve within:
- 5-10 minutes: Local network
- 30 minutes: Most ISPs
- 2-4 hours: Worldwide

You can monitor propagation at: https://dnschecker.org/

---

## Next Steps

1. Add all 9 DNS records as outlined above
2. Wait for propagation (test with nslookup or dnschecker)
3. Visit https://criticalengineer.ai/ — should show your site
4. Visit https://www.criticalengineer.ai/ — should redirect to apex
5. Check HTTPS works (browser shows lock icon)
