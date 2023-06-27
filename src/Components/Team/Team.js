import React from 'react'
import './team.css'
const Team = () => {

    const teamMembers = [
        {
            name: 'Ayan Gupta',
            position: 'Head Chef',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',

        },
        {
            name: 'Sia Sharma ',
            position: 'Pastry Chef',
            bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
            imageUrl: 'https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',

        },
        {
            name: 'Rishi Sen',
            position: 'Sous Chef',
            bio: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
            imageUrl: 'https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',

        },
    ];
    return (
        <div className="team-section">
            <h2 className='team-header'>Meet Our Culinary Dreamweavers</h2>
            <p>Crafting Delicious Experiences with Passion and Precision</p>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.imageUrl} alt={member.name} />
                         <h3>{member.name}</h3>
                        <p className='para'>{member.position}</p>
                        <p className='bio'>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team