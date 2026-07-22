# Amit Pokharel — Personal Site

Your full personal site, rebuilt in **Next.js** with **Sanity** as your visual
editing dashboard at `/studio`. Replaces the WordPress site.

**Pages:** Home (hero, about, portfolio, testimonials, latest posts),
Blog listing, individual post pages, and a 404.

**Everything is editable without code** — your name, tagline, bio, photos,
CV link, projects, testimonials, contact details, and blog posts all live in
the Studio.

You do **not** need to touch any code or use a terminal. Total time: 20–30 min.

---

## What you're setting up

| Piece | What it does | Cost |
|-------|--------------|------|
| **GitHub** | Stores the project code | Free |
| **Sanity** | Your writing dashboard + content storage | Free tier |
| **Vercel** | Hosts and builds the live site | Free tier |
| **amitpokharel.com** | Your domain (already yours) | Already paid |

Do the steps **in order** — Step 1 gives you an ID that Step 3 needs.

---

## Step 1 — Create your Sanity project (~5 min)

1. Go to **https://www.sanity.io** and click **Get started** / **Sign up**
   (signing in with GitHub or Google is easiest).
2. Create a **new project**. Name it `amitpokharel-blog`.
3. When asked about a dataset, use the name **`production`** and choose
   **Public** (this lets your published posts be read by the website).
4. Once created, open **https://www.sanity.io/manage**, click your project, and
   find the **Project ID** on the overview page. It looks like `abcd1234`.
   **Copy it and keep it handy** — you'll need it in Step 3.

> Leave this tab open. You'll come back here in Step 5 to allow your domain.

---

## Step 2 — Put the code on GitHub (~5 min)

1. Unzip the project folder I gave you (`amitpokharel-blog`).
2. Go to **https://github.com** and sign up / log in.
3. Click **New repository**. Name it `amitpokharel-blog`, keep it **Private**
   (or Public — your choice), and click **Create repository**.
4. On the next page, click the link **“uploading an existing file.”**
5. Open the unzipped folder on your computer, select **all the files and
   folders inside it**, and drag them into the browser upload area.
   Wait for them all to finish uploading.
6. Click **Commit changes**.

> Don't worry about the `node_modules` folder — it's intentionally not
> included. Vercel rebuilds it automatically.

---

## Step 3 — Deploy on Vercel (~5 min)

1. Go to **https://vercel.com** and **sign up with your GitHub account**
   (this connects the two automatically).
2. Click **Add New… → Project**, find your `amitpokharel-blog` repo, and click
   **Import**.
3. Before clicking Deploy, open the **Environment Variables** section and add
   these three (copy the names exactly):

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | *your Project ID from Step 1* |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | `2026-03-01` |

4. Click **Deploy**. After a minute or two you'll get a live URL like
   `amitpokharel-blog.vercel.app`. Open it — you'll see the site with a
   “No posts yet” message. That's correct! 🎉

---

## Step 4 — Connect your domain (~5 min)

1. In your Vercel project, go to **Settings → Domains**.
2. Type **`amitpokharel.com`** and click **Add**.
3. Vercel will show you DNS records to set (either two **A / CNAME records**,
   or **nameservers**). Log in to wherever you bought amitpokharel.com and
   enter exactly what Vercel shows.
4. DNS can take anywhere from a few minutes to a few hours to activate. Vercel
   shows a green check when it's live.

---

## Step 5 — Allow your domain in Sanity (~2 min)

Your dashboard lives at `amitpokharel.com/studio`, so Sanity needs to trust
that address.

1. Back at **https://www.sanity.io/manage**, open your project →
   **API** tab → **CORS origins**.
2. Click **Add CORS origin** and add each of these (tick **Allow credentials**
   for each):
   - `https://amitpokharel.com`
   - `https://www.amitpokharel.com`
   - your `https://amitpokharel-blog.vercel.app` URL

---

## Step 6 — Fill in your content ✍️

Go to **`amitpokharel.com/studio`** (or the `.vercel.app/studio` URL while DNS
is still propagating) and sign in with your Sanity account.

Work through these in order:

1. **Site settings** — your name, tagline, hero portrait, bio, about photo,
   years of experience, CV link, contact details, and social links.
2. **Projects** — your real work. Each needs a title, image, and optionally a
   category, description, and link. *Skip the stock photos* — a smaller set of
   real work beats six generic laptop pictures.
3. **Testimonials** — only real feedback from real people. If you have none
   yet, leave it empty and the section hides itself automatically.
4. **Blog posts** — title, cover image, body, tags. Click **Publish**.

Your site updates within about a minute of publishing.

---

## Making changes later

- **Writing / editing posts:** always in the Studio at `/studio`. No code.
- **Changing the design or layout:** edit the files and push to GitHub —
  Vercel redeploys automatically. (Happy to help with any of these.)

## Where things live (for reference)

```
app/(site)/            The public site (home, blog, post pages)
app/studio/            Your editing dashboard
components/site/       Homepage sections (hero, about, portfolio, etc.)
sanity/schemaTypes/    What fields each content type has
app/globals.css        Colors, fonts, and styling
```

## A note on your old WordPress site

Once you point amitpokharel.com at Vercel (Step 4), this new site replaces the
WordPress one. Before you switch, save anything you want to keep — especially
the text of your two existing posts ("Good Morning from Kathmandu!" and
"Hello world!"), which you can paste into the Studio as new posts.
