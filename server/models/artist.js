import thinky from '../utils/thinky';
const type = thinky.type;
const r = thinky.r;

const Artist = thinky.createModel('Artist', {
    slug: type.string(),
    name: type.string(),
    bio: type.string(),
    socials: [{
        type: type.string(),
        url: type.string()
    }],
    createdOn: type.date().default(r.now())
});

export default Artist;