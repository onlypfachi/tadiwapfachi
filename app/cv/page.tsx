const Page = () => {
  return (
    <>
      <div style={{
        position: 'relative',
        width: '80%',
        height: 0,
        paddingTop: '141.4286%',
        paddingBottom: 0,
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em',
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform'
      }}>
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0
          }}
          src="https://www.canva.com/design/DAFA9Dq_gWM/view?embed"
          allowFullScreen
        />
      </div>
      <a
        href="https://www.canva.com/design/DAFA9Dq_gWM/view?utm_content=DAFA9Dq_gWM&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      >
        DAVID PFACHI CV
      </a> by Tadiwanashe David Jnr Pfachi
    </>
  );
};

export default Page;
