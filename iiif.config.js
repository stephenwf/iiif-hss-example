import { env } from 'process';


export const server = {
    url: env.DEPLOY_PRIME_URL || "http://localhost:7111",
}

export const stores = {
    "manifests": {
        "type": "iiif-json",
        "path": "./content",
        "subFiles": true,
        "ignore": [
            "content/manifests/*"
        ],
        "pattern": "**/*.json",
        "destination": "manifests",
        "base": "./content"
    },
    "bridges": {
        "type": "iiif-remote",
        "url": "https://view.nls.uk/collections/7446/74466699.json",
        "overrides": "./content",
        "saveManifests": true,
        "slugTemplates": [
            "nls-manifests",
            "nls-collections"
        ]
    }
}

export const slugs = {
    "nls-manifests": {
        "type": "Manifest",
        "prefix": "https://view.nls.uk/manifest/",
        "pattern": "/:id1/:id2/manifest.json",
        "slugTemplate": "manifests/nls-:id1-:id2",
        "examples": [
            "https://view.nls.uk/manifest/7446/74464117/manifest.json"
        ]
    },
    "nls-collections": {
        "type": "Collection",
        "prefix": "https://view.nls.uk/collections/",
        "pattern": "/:id1/:id2.json",
        "slugTemplate": "collections/nls-:id1-:id2",
        "examples": [
            "https://view.nls.uk/collections/7446/74466699.json"
        ]
    }
}
