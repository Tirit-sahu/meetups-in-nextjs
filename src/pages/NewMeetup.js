import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom';

function NewMeetupPage(){
    const history = useHistory();

    function addMeetuphandler(meetupData){
        fetch(
            'https://react-course-92fbd-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetuphandler} />
        </section>
    );
}

export default NewMeetupPage;