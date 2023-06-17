import Comment from "./Comment";

export default function Testimonials() {
    return (
        <article className="container">
            <h1>Testimonials</h1>
            <div className="testimonials">
                <Comment author="Jillian" title="Event Manager" affiliate="Premier and Cabinet">
                    The food that was prepared was fantastic and I heard a lot of good comments as I was moving around.
                    The presentation was also very impressive.
                </Comment>
                <Comment author="Angelo" title="Student" affiliate="Cairns State High School">
                    Please thank your team for their professional, efficient and friendly service on Sat night. The
                    chefs smashed it and the drinks flowed freely! Everyone was impressed and were quite taken with how
                    cost effective it was.
                </Comment>
                <Comment author="Margo" title="Wedding Reception">
                    Thank you for catering both our wedding reception and post stand up breakfast, the food was
                    spectacular and we really appreciated your professionalism along the way. Thank you again.
                </Comment>
                <Comment author="Alexandra" title="Conference Organiser" affiliate="Grant Harrod">
                    Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in
                    quite some time. You will definitely be seeing more of me eating at your establishment.
                </Comment>
            </div>
        </article>
    )
}