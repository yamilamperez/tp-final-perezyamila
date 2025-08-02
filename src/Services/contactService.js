const contacts = [
        {
        id: 1,
        name: 'Príncipe encantador',
        avatar: '../public/encantador.jpg',
        description: 'Te quiero mami <3',
        last_connection: 'ayer',
        connection_status: 'offline',
        messages: [
        {
            emisor: 'Encantador',
            hora: '18:50',
            id: 1,
            texto: '¿Dónde están Shrek y Fiona?',
            status: 'visto'
        },
        {
            emisor: 'Encantador',
            hora: '18:51',
            id: 2,
            texto: 'Esos nombres no me suenan....',
            status: 'visto'
        },
        {
            emisor: 'Encantador',
            hora: '18:52',
            id: 2,
            texto: 'Escuchen monstruitos... mejor cooperen con el rey de Muy Muy Lejano!!!!',
            status: 'visto'
        },
                {
            emisor: 'Encantador',
            hora: '18:53',
            id: 2,
            texto: '¡De lo único que serás rey es del reino de los estúpidos!',
            status: 'visto'
        },
        ]
        },
        {
        Id: 2,
        name: 'Farquad',
        avatar: '../public/farquad.jpg',
        description: 'El gran Rey de Dunlop',
        last_conection: 'ahora',
        conection_status: 'online',
        messages: [        
        {
            emisor: 'Farquad',
            hora: '15:40',
            id: 1,
            texto: 'Dime o te arrancaré....',
            status: 'visto'
        },
        {
            emisor: 'Farquad',
            hora: '15:41',
            id: 2,
            texto: 'Nooo, no mis botones de gomita... De acuerdo, te lo cuento. ¿Tú conoces a Pin Pon?',
            status: 'visto'
        },
        {
            emisor: 'Farquad',
            hora: '15:42',
            id: 3,
            texto: '¿Pin Pon?',
            status: 'visto'
        },
        {
            emisor: 'Farquad',
            hora: '15:43',
            id: 4,
            texto: 'Sí, Pin Pon. Se lava su carita con agua y con jabón.',
            status: 'visto'
        },
        {
            emisor: 'Farquad',
            hora: '15:44',
            id: 5,
            texto: '¡¿CON AGUA Y CON JABÓN?!',
            status: 'visto'
        },
        {
            emisor: 'Farquad',
            hora: '15:42',
            id: 3,
            texto: '¡SÍ, SE LAVA LA CARITA!',
            status: 'visto'
        }
        ]
        }
    ]

const getContactList = () => {
    return contacts
}

const getContactById = () => {
    for(const contact of contacts) {
        if(Number(contact.id) === Number(contact.id)) {
            return contact
        }
    }
    return null
}

export {getContactList, getContactById}