export default function Comment(props) {
    const {author, title, affiliate, children} = props
    return (
        <div className="comment">
            <blockquote>{children}</blockquote>
            <p>{author} - {title}</p>
            <p>{affiliate}</p>
        </div>
    )
}