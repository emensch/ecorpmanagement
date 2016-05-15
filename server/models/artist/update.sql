UPDATE Artists
SET
    slug = ${newSlug},
    name = ${name},
    image = ${image},
    bio = ${bio},
    socials = ${socials}
WHERE slug = ${slug}