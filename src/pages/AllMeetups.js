import MeetupLists from "../components/meetups/MeetupList";

export default function AllMeetups() {
    return <section>
        <h1>All Meetup</h1>
        <MeetupLists meetup={dummy}></MeetupLists>
    </section>
}

const dummy = [
    {
        id: 'test1',
        title: 'this is first meetups',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 'test2',
        title: 'this is second meetups',
        image: 'https://images.unsplash.com/photo-1638913975386-d61f0ec6500d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 'test3',
        title: 'this is third meetups',
        image: 'https://images.unsplash.com/photo-1647612011547-55ae297d6a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
];