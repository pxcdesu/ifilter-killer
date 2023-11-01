self.__uv$config = {
    prefix: '/service/',
    bare: 'https://bare-server-vercel-70pvy5od0-alexortiz6668.vercel.app/bare/',
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
