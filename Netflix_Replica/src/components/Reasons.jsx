function Reasons(){
    const reasons = [
        {
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV and more."
    },

    {
      title: "Download your shows",
      description:
        "Save your favourites easily and always have something to watch."
    },

    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet and laptop."
    },

    {
      title: "Create profiles for kids",
      description:
        "Give children their own space with shows and movies made for them."
    }
    ];

    
    return(
        <section className="reasons">
            <h2>More Resons to join</h2>

            <div className="reasons-list">
                {reasons.map((reason) => (
                    <div className="reason-card" key={reason.title}>
                        <h3>{reason.title}</h3>
                        <p>{reason.description}</p>

                    </div>


                ))}
            </div>
        </section>

    )
}

export default Reasons;