import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

export default function MeetupLists(props)
{
    return <ul className={classes.list}>
        {props.meetup.map(item => <MeetupItem key={item.id} id={item.id}
        image={item.image}
        title={item.title} />)}
    </ul>
}