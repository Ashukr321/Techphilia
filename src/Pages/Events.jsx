import React from 'react'
import Event from '../Data/Events'
import EventCard from '../Widgets/EventCard'
import './PageStyles.css'

export default function Events() {
  return (
    
    <div className=' events min-h-screen w-full justify-center align-center   grid lg:grid-cols-3 md:grid-cols-2 md:p-36 max-[678px]:pt-16 '>
      
    {
        Event.map((cards,index)=>{
            return(
                <EventCard  title={cards.title} imgUrl={cards.imgURL} Faculty_Co_ordinator={cards.Faculty_Co_ordinator} Student_Co_ordinator={cards.Student_Co_ordinator}  Faculty_Co_ordinator_School={cards.Faculty_Co_ordinator_School} Student_Co_ordinator_School={cards.Student_Co_ordinator_school} rule={cards.rule} key={index} formUrl={cards.formUrl} />
            )
        })
    }
</div>
  )
}
