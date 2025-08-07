const contacts = [
        {
        id: 1,
        name: 'Encantador',
        avatar: '/images/encantador.jpg',
        lastConnection: '18:52',
        lastMessage: '¡De lo único que serás r...',
        messages: [
        {
            emisor: 'Encantador',
            hora: '18:50',
            id: 1,
            texto: '¿Dónde están Shrek y Fiona?',
            status: 'visto'
        },
        {
            emisor: 'Jengibre',
            hora: '18:51',
            id: 2,
            texto: 'Esos nombres no me suenan...',
            status: 'visto'
        },
        {
            emisor: 'Encantador',
            hora: '18:52',
            id: 3,
            texto: 'Escuchen monstruitos... mejor cooperen con el rey de Muy Muy Lejano!!!!',
            status: 'visto'
        },
                {
            emisor: 'Jengibre',
            hora: '18:53',
            id: 4,
            texto: '¡De lo único que serás rey es del reino de los estúpidos!',
            status: 'visto'
        },
        ]
        },
        {
        id: 2,
        name: 'Farquad',
        avatar: '/images/farquad.jpg',
        description: 'El gran Rey de Dunlop',
        lastConnection: '15:44',
        lastMessage: '¡SÍ, SE LAVA LA CARITA!',
        messages: [        
        {
            emisor: 'Farquad',
            hora: '15:40',
            id: 5,
            texto: 'Dime o te arrancaré....',
            status: 'visto'
        },
        {
            emisor: 'Jengibre',
            hora: '15:41',
            id: 6,
            texto: 'Nooo, no mis botones de gomita... De acuerdo, te lo cuento. ¿Tú conoces a Pin Pon?',
            status: 'visto'
        },
        {
            emisor: 'Farquad',
            hora: '15:42',
            id: 7,
            texto: '¿Pin Pon?',
            status: 'visto'
        },
        {
            emisor: 'Jengibre',
            hora: '15:43',
            id: 8,
            texto: 'Sí, Pin Pon. Se lava su carita con agua y con jabón.',
            status: 'visto'
        },
        {
            emisor: 'Farquad',
            hora: '15:44',
            id: 9,
            texto: '¡¿CON AGUA Y CON JABÓN?!',
            status: 'visto'
        },
        {
            emisor: 'Jengibre',
            hora: '15:45',
            id: 10,
            texto: '¡SÍ, SE LAVA LA CARITA!',
            status: 'visto'
        }
        ]
        }
    ]

const getContactList = () => {
    return contacts
}

const getContactById = (id) => {
    for(const contact of contacts) {
        if (contact.id === parseInt(id)) {
            return contact
        }
    }
    return null
}

export {getContactList, getContactById}