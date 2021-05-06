import { useEffect, useState } from "react";

export function useTalks() {
    const [loading, setLoading] = useState(false);
    const [talks, setTalks] = useState([]);

    useEffect(() => {
        setLoading(true);

        const talkList = [
            {
                id: 1,
                time: "08:00 a.m",
                title: "Presentation Ceremony",
                speakerName: "Team Confy",
                speakerPhoto: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 2,
                time: "08:15 a.m",
                title: "React.js: From zero to hero",
                speakerName: "Faustine Da Silva",
                speakerPhoto: "https://randomuser.me/api/portraits/med/women/33.jpg"
            },
            {
                id: 3,
                time: "09:00 a.m",
                title: "Styled components",
                speakerName: "Lucienne Masson",
                speakerPhoto: "https://randomuser.me/api/portraits/med/women/52.jpg"
            },
            {
                id: 4,
                time: "10:00 a.m",
                title: "React with Storybook",
                speakerName: "Ruben Johnston",
                speakerPhoto: "https://randomuser.me/api/portraits/med/men/33.jpg"
            },
            {
                id: 5,
                time: "11:00 a.m",
                title: "React and TypeScript",
                speakerName: "Mikolaj Magerøy",
                speakerPhoto: "https://randomuser.me/api/portraits/med/men/15.jpg"
            },
            {
                id: 6,
                time: "12:00 p.m",
                title: "Lunch",
                speakerName: "All people :) ",
                speakerPhoto: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            },
            {
                id: 7,
                time: "14:00 p.m",
                title: "React Hooks",
                speakerName: "Charlotte Green",
                speakerPhoto: "https://randomuser.me/api/portraits/med/women/32.jpg"
            },
            {
                id: 8,
                time: "15:00 p.m",
                title: "React Animations",
                speakerName: "Miquel Van der Lans",
                speakerPhoto: "https://randomuser.me/api/portraits/med/men/38.jpg"
            },
            {
                id: 9,
                time: "16:00 p.m",
                title: "Redux vs useContext()",
                speakerName: "Elif Sözeri",
                speakerPhoto: "https://randomuser.me/api/portraits/med/women/43.jpg"
            },
            {
                id: 10,
                time: "17:00 p.m",
                title: "Next.js Framework",
                speakerName: "Emilia Laakso",
                speakerPhoto: "https://randomuser.me/api/portraits/med/women/30.jpg"
            },
            {
                id: 11,
                time: "18:00 p.m",
                title: "Best practices with React",
                speakerName: "Noor Myhra",
                speakerPhoto: "https://randomuser.me/api/portraits/med/women/21.jpg"
            },
            {
                id: 12,
                time: "19:00 p.m",
                title: "Close Ceremony :(",
                speakerName: "Team Confy",
                speakerPhoto: "https://images.unsplash.com/photo-1529268209110-62be1d87fe75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            }
        ]
        setTalks(talkList)
        setLoading(false);
    }, [])

    return { loading, talks }
}