import React from 'react';

import { Container, Wrapper } from './styles';
import TopBar from './../Topbar';
import Posts from './../Post';
import CreatePost from './../CreatePost';
import SidebarLeft from './../SidebarLeft';
import SidebarRight from './../SidebarRight';
import Stories from './../Stories';

const PostItem = [
  {
    id: 1,
    name: "Milad Shams",
    publicationDate: "2 d",
    imageProfile: "/image/avatar/milad-shams-YVGe3s1Qhfw-unsplash.jpg",
    imagePost: "/image/posts/milad-shams-s_jUAnekLSA-unsplash.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    totalComments: 23,
    totalShares: 10,
    totalReact: 34,
    reaturedReactionName: 'Felipe Mota',
    reaction: [
      "Like", "Love", "Smile"
    ],
    comments: [
      {
        id: 1,
        name: "Felipe Mota",
        publicationDate: "3 h",
        imageProfile: "/image/avatar/felipemota.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam consequuntur, alias veritatis iusto voluptates blanditiis. Aliquid, officia nulla saepe reiciendis consectetur",
        replies: [
          {
            id: 1,
            name: "Omid Armin",
            publicationDate: "2 h",
            imageProfile: "/image/avatar/karsten-winegeart-KSqfFHtHpro-unsplash.jpg",
            text: "Aliquid, officia nulla saepe reiciendis consectetur",
          },
          {
            id: 2,
            name: "Hunter Matthews",
            publicationDate: "2 h",
            imageProfile: "/image/avatar/hunter-matthews-X7gHHDPlp8U-unsplash.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam consequuntur",
          },
        ],
      }
    ],
  },
  {
    id: 2,
    name: "Stephan Louis",
    publicationDate: "2 h",
    imageProfile: "/image/avatar/stephan-louis-VXzH2o3olpA-unsplash.jpg",
    imagePost: "/image/posts/stephan-louis-o_85sZfPj4U-unsplash.jpg",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
    totalComments: 23,
    totalShares: 10,
    totalReact: 34,
    reaturedReactionName: 'Felipe Mota',
    reaction: [
      "Like", "IconCare", "IconWow"
    ],
    comments: [
      {
        id: 1,
        name: "Omid Armin",
        publicationDate: "1 h",
        imageProfile: "/image/avatar/omid-armin-DeQ7YsiD6v8-unsplash.jpg",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        replies: [
          {
            id: 1,
            name: "Karsten Winegeart",
            publicationDate: "40 min",
            imageProfile: "/image/avatar/karsten-winegeart-KSqfFHtHpro-unsplash.jpg",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            id: 2,
            name: "Stephan Louis",
            publicationDate: "30 min",
            imageProfile: "/image/avatar/stephan-louis-VXzH2o3olpA-unsplash.jpg",
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          },
        ],
      }
    ],
  },
]

interface CommentProps {
  id: number;
  name: string;
  imageProfile: any;
  text: string;
  publicationDate: string;
  replies: any[];
}

interface Post {
  id: number;
  name: string;
  imageProfile: string;
  imagePost?: string;
  text: string;
  reaction: any;
  reaturedReactionName: string;
  totalComments: number;
  totalShares: number;
  totalReact: number;
  publicationDate: string;
  comments: CommentProps[];
}

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <SidebarLeft />
        <div className={'content'}>
          <Stories />
          <CreatePost />
          {/* <Posts /> */}
          {PostItem.map((post: Post) => {
            return (
              <Posts
                key={post.id}
                name={post.name}
                publicationDate={post.publicationDate}
                imageProfile={post.imageProfile}
                imagePost={post.imagePost}
                text={post.text}
                reaction={post.reaction}
                totalComments={post.totalComments}
                totalShares={post.totalShares}
                totalReact={post.totalReact}
                reaturedReactionName={post.reaturedReactionName}
                comments={post.comments}
              />
            );
          })}
        </div>
        <SidebarRight />
      </Wrapper>
    </Container>
  );
}

export default Layout;