export async function getServerSideProps(ctx) {
  const queryUrl = ctx.query.r;
  if (queryUrl) {
    return {
      redirect: {
        destination: queryUrl,
        permanent: false,
      },
    };
  }
}

export default function L() {
  return;
}
