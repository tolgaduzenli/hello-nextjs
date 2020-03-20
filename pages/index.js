import Layout from '../components/MyLayout';
import Link from 'next/link';
const PostLink = props => (
    <li>
        <Link
            href={{ pathname: `/${props.id}`, query: { title: props.title } }}
            as={props.id}
        >
            <a>{props.title}</a>
        </Link>
    </li>
);
export default function Index() {
    return (
        <Layout>
            <PostLink id="hello-next" title="Hello Next.js" />
            <PostLink id="content" title="Content Next.js" />
        </Layout>
    );
}