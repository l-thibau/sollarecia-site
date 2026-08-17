# Manutenção do site — Sollar Representações

O site é estático e está publicado pelo **GitHub Pages** a partir do repositório [`l-thibau/sollarecia-site`](https://github.com/l-thibau/sollarecia-site). O arquivo principal é `index.html`.

## Endereços

- Prévia/URL técnica: `https://l-thibau.github.io/sollarecia-site/`
- Endereço oficial: `https://sollarecia.com.br/`
- Repositório: `https://github.com/l-thibau/sollarecia-site`

## Editar um texto, link ou descrição pelo GitHub

1. Abra o repositório e clique em `index.html`.
2. Clique no ícone de lápis (**Edit this file**).
3. Use `Ctrl+F` para encontrar o texto ou marca que quer alterar. Exemplos:
   - `Arthi` para editar o card da Arthi;
   - `comercial@sollarecia.com.br` para editar o e-mail;
   - `993105333` para editar o WhatsApp;
   - `--pine` para encontrar a cor principal.
4. Altere somente o texto entre as tags, por exemplo:
   ```html
   <h3>Arthi</h3><p>Utilidades domésticas para cozinha, banheiro e organização.</p>
   ```
5. Em **Commit changes**, descreva brevemente a alteração e confirme em **Commit changes**.
6. O GitHub Pages publica automaticamente. Normalmente leva de 1 a 3 minutos. Em **Actions** ou **Settings → Pages** é possível acompanhar o status do deploy.

> Para editar muitos trechos, prefira abrir `index.html` no computador em VS Code, alterar e enviar pelo GitHub Desktop ou por `git`.

## Estrutura do `index.html`

| Área | Onde editar |
|---|---|
| Título da aba e descrição de busca | No início: `<title>` e `<meta name="description">` |
| Cores, fontes, espaçamentos e cards | Bloco `<style>` no topo |
| Logo/casinha do cabeçalho | `assets/sollar-home.svg` e a tag `<img class="brand-logo" ...>` |
| Texto principal da página | Seções `hero` e `intro` |
| Marcas e descrições | Seção `<section ... id="marcas">` |
| WhatsApp, e-mail e Instagram | Seção `id="contato"` |

## Adicionar uma nova marca

Na área de marcas, copie um card completo, cole antes de `</div></section>` e ajuste nome, descrição e link:

```html
<article class="brand-card">
  <h3>Nome da Marca</h3>
  <p>Descrição temática breve e factual da linha.</p>
  <a href="https://link-oficial-da-marca-ou-catalogo" target="_blank" rel="noopener">Abrir catálogo</a>
</article>
```

Use links oficiais ou catálogos fornecidos pela Sollar. A seção é uma **seleção** do portfólio, não uma lista completa.

## Alterar cores

As cores ficam no começo de `index.html`, na linha `:root{...}`. As mais importantes são:

```css
--pine: #d9a847;  /* mostarda do topo e hero */
--ink: #2f342e;   /* grafite de textos */
--sun: #f8eed8;   /* creme/destaques */
--cream: #f7efde; /* fundo geral */
```

Altere o código hexadecimal depois de `#`. Mantenha contraste alto: texto deve ser escuro sobre fundo claro ou claro sobre fundo escuro.

## Trocar a casinha/logo

A casinha visível no topo está em `assets/sollar-home.svg`.

- Para trocar por outro SVG: envie o novo arquivo à pasta `assets/`, depois mude o `src` do `<img class="brand-logo">`.
- Para atualizar a mesma imagem e evitar cache, aumente o número no final: `assets/sollar-home.svg?v=4`.
- Preserve um texto alternativo útil, por exemplo: `alt="Ícone de casinha da Sollar"`.

## Adicionar uma imagem

1. No GitHub, abra a pasta `assets/` e use **Add file → Upload files**.
2. Confirme o envio.
3. No `index.html`, use um caminho relativo:
   ```html
   <img src="assets/nome-da-imagem.jpg" alt="Descrição objetiva da imagem">
   ```
4. Para foto, prefira WebP ou JPG comprimido. Evite imagens enormes para não deixar o site lento.

## Publicação e cache

Cada commit na branch `main` gera uma publicação do GitHub Pages. Se o navegador insistir em mostrar a versão anterior:

- abra em aba anônima; ou
- faça recarregamento forçado: `Ctrl+F5` no Windows/Linux, `Cmd+Shift+R` no macOS; ou
- acrescente uma versão ao arquivo alterado, como `?v=4`.

## Domínio e DNS — cuidado

No Registro.br, os registros web do domínio raiz usam os quatro A do GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

O `www` deve ser um CNAME para `l-thibau.github.io.`.

**Não remova nem altere os MX da Zoho**, pois eles mantêm o e-mail `comercial@sollarecia.com.br`:

```text
10 mx.zoho.com.
20 mx2.zoho.com.
50 mx3.zoho.com.
```

No GitHub, o domínio precisa estar configurado em **Settings → Pages → Custom domain** como `sollarecia.com.br`. Depois de o DNS estar válido, marque **Enforce HTTPS**.

## CORS: quando é necessário (e quando não é)

Este site é apenas HTML/CSS/JS estático. Alterar textos, cores, imagens, cards e links **não exige CORS**.

CORS só entra em cena quando um JavaScript da página tenta acessar uma API de outro domínio — por exemplo, um formulário que chama `https://api.exemplo.com`.

O GitHub Pages **não permite configurar cabeçalhos CORS próprios** nem executar código de servidor. Portanto:

- Para consumir uma API externa: o dono da API deve permitir o domínio `https://sollarecia.com.br` no cabeçalho `Access-Control-Allow-Origin`.
- Para processar formulários, e-mails, banco de dados ou qualquer segredo: use um serviço de backend/formulários ou um endpoint seu; nunca coloque chaves, senhas ou tokens em `index.html`.
- Para redirecionamentos simples, links e WhatsApp: nenhum CORS é necessário.

## Limite de segurança

Nunca publique em `index.html`, no GitHub ou em imagens anexadas:

- senhas;
- tokens/API keys;
- credenciais do Zoho, Registro.br, WhatsApp ou GitHub;
- arquivos `.env`.
