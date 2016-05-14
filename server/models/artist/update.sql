UPDATE Artists
SET
    slug = ${newSlug},
    name = ${name},
    bio = ${bio},
    socials = ${socials}
WHERE slug = ${slug}