"use client";

export default function PostCard(props) {
    return (
        <div>
            <div>userId: {props.userId}</div>
            <div>title: {props.title}</div>
            <div>body: {props.body}</div>
        </div>
    )
}