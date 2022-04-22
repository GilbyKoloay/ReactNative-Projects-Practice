import { P6281, P6282 } from '../assets/images';

const data = [
    {
        id: 1, // user id
        phone: '6281',
        name: "telorbusu",
        about: "..- ..--.. .--.....-- ..- ..--..",
        picture: P6281,
        lastSeen: ['01/02/2003', '11:03'],
        contacts: [
            {
                id: 2, // user id
                chats: [
                    {
                        id: 1, //chat id
                        type: 'send',
                        date: '01/02/2003',
                        time: '10:23',
                        message: "from telorbusu to telor",
                    },
                    {
                        id: 2, //chat id
                        type: 'receive',
                        date: '01/02/2003',
                        time: '12:03',
                        message: "from telor to telorbusu",
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        phone: '6282',
        name: "telor",
        about: "telor ipsum",
        picture: P6282,
        lastSeen: ['01/02/2003', '11:02'],
        contacts: [
            {
                id: 1,
                chats: [
                    {
                        id: 1, //chat id
                        type: 'receive',
                        date: '01/02/2003',
                        time: '10:23',
                        message: "from telorbusu to telor",
                    },
                    {
                        id: 2, //chat id
                        type: 'send',
                        date: '01/02/2003',
                        time: '12:03',
                        message: "from telor to telorbusu",
                    }
                ]
            },
            {
                id: 3,
                chats: [
                    {
                        id: 1, //chat id
                        type: 'receive',
                        date: '04/05/2006',
                        time: '04:56',
                        message: "from busu to telor",
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        phone: '6283',
        name: "busu",
        about: "busu ipsum",
        picture: null,
        lastSeen: ['04/05/2006', '03:56'],
        contacts: [
            {
                id: 2,
                chats: [
                    {
                        id: 1, //chat id
                        type: 'send',
                        date: '04/05/2006',
                        time: '04:56',
                        message: "from busu to telor",
                    },
                ]
            }
        ]
    }
];

export default data;
