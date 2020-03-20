import Layout from '../components/MyLayout.js';

const Content = () => {
    return (
        <>
            <p>This is the content page</p>
        </>
    );
};

const Page = () => (
    <Layout>
        <Content />
    </Layout>
);

export default Page;