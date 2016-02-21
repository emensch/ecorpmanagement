import thinky   from '../utils/thinky';
import genSlug  from 'slug'; 
const type = thinky.type;
const r = thinky.r;

const Artist = thinky.createModel('Artist', {
    slug: type.string().required(),
    name: type.string().required(),
    bio: type.string().required(),
    socials: [{
        type: type.string().required(),
        url: type.string().required()
    }],
    createdOn: type.date().default(r.now())
}, {
    pk: 'slug'
});


Artist.defineStatic('getAll', function(filter) {
    if(typeof filter == 'undefined') {
        return this.run();
    } else {
        return this.pluck(filter).execute();
    }
});

Artist.defineStatic('create', function(data) {
    delete data.slug;

    const slug = genSlug(data.name);
    const newArtist = new this({slug, ...data});
    return newArtist.save();
});

Artist.defineStatic('update', function(slug, data) {
    if(data.hasOwnProperty('name')) {
        return this.get(slug).run()
            .then( (artist) => {
                return artist.delete(); // Not atomic but fortune favors the bold
            })
            .then( (artist) => {
                data.slug = genSlug(data.name);
                return artist.merge(data)
            })
            .then( (updatedArtist) => {
                return updatedArtist.save();
            })
    } else {
        delete data.slug;

        return this.get(slug).run()
            .then( (artist) => {
                console.log(artist)
                return artist.merge(data);
            })
            .then( (updatedArtist) => {
                return updatedArtist.save();
            })
    }
});

Artist.defineStatic('delete', function(slug) {
    return this.get(slug).run()
        .then( (artist) => {
            return artist.delete();
        })
});

export default Artist;