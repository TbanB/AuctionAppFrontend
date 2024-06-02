function categoryImage(name) {
    const categories = {
        Electronica: "https://www.itreseller.es/files/202302/portatiles-tienda.jpg",
        Moda: "https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg",
        Hogar: "https://media.admagazine.com/photos/648cd919d6ffbb9c781e28c0/16:9/w_2560%2Cc_limit/renovar-los-muebles-sala.jpg",
        Deportes: "https://deportesalud.blogs.upv.es/files/2021/12/Que-son-los-accesorios-deportivos-y-como-pueden-mejorar-el-rendimiento.jpg",
        Belleza: "https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652",
        Juguetes: "https://cdn.s7.shopdisney.eu/is/image/ShopDisneyEMEA/TDSX-99_Shop_Disney_Q224_WK14_TOYS_PAGES_figurines_mb?fit=constrain&cropN=0,0,1,1&fmt=jpeg&qlt=90&wid=1200",
        Libros: "https://fotografias.larazon.es/clipping/cmsimages01/2023/06/01/341A2EFC-88F2-44C6-B79F-369BFEEA6086/imagen-archivo-libros_98.jpg?crop=6067,3413,x0,y44&width=1900&height=1069&optimize=low&format=webply",
        Automóviles: "https://cdn.motor1.com/images/mgl/zx4bV4/s3/primera-prueba-hyundai-ioniq-6-2023.jpg",
        Coleccionables: "https://i.ytimg.com/vi/-CTVO98uiXk/maxresdefault.jpg",
        Arte: "https://worldcampus.saintleo.edu/img/article/estudiar-carrera-universitaria-virtual-curso-bellas-artes-que-es-arte-moderno.webp"
    };
    return categories[name];
}

function productImage(name) {
    const product = {
        Electronica: "https://www.apple.com/v/iphone/home/bu/images/meta/iphone__ky2k6x5u6vue_og.png",
        Moda: "https://hips.hearstapps.com/hmg-prod/images/may-berthelot-wears-high-waist-white-latte-palazzo-flared-news-photo-1677070543.jpg",
        Hogar: "https://www.mueblesvalencia.es/8772-large_default/sillon-moderno-modelo-1-tienda-muebles-madrid.jpg",
        Deportes: "https://www.dragonsports.eu/382091-verylarge_default/guantes-formacion-fxv6-cuero-fairtex.jpg",
        Belleza: "https://previews.123rf.com/images/loonara/loonara1607/loonara160700012/60728838-maquillaje-profesional-pinceles-y-herramientas-de-recolecci%C3%B3n-maquillaje-productos-que-figuran-en.jpg",
        Juguetes: "https://cdn.yugen-collectibles.com/27707-large_default/dc-comics-art-scale-110-figura-batman-unleashed-deluxe.jpg",
        Libros: "https://www.readandcobooks.co.uk/wp-content/uploads/H-P-Lovecraft-A-Cosmic-Horror-Collection_BLOG_850x445.jpg",
        Automóviles: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/06/ford-mustang-clasico-electrico.jpg?tf=3840x",
        Coleccionables: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Estampillas_centenario.jpg/1200px-Estampillas_centenario.jpg",
        Arte: "https://i0.wp.com/revistaestilo.org/wp-content/uploads/2021/12/Starry_Night_Over_the_Rhone_detalle_Van-Gogh.jpg?resize=1600%2C813&ssl=1"
    };
    return product[name];
}

export { categoryImage, productImage };