import Moviecard from "./Moviecard";

function Trending() {
  const movies = [
    {
      image:
        "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaZEyL4lBxMbJc6Mov0W6-fxDiCNnI0STN_Vx6ViMePxAAQGf5R3gQLUCEkz2YMSctqnX0q92jBVrJeK0uY79Ub862UN4hl1wNE.webp?r=dd2",
      title: "Movie One",
      number: 1,
    },

    {
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABa6Y0NoZb-VD8j0GCYcbcFG2ZuZWqtPrqD7OwVKvMvGacDivGO1H1Tp5yYzvwN1dpZgy5jFvNyPg0BYK4BVvIQ-8CNLWe89jgfc.webp?r=ebd",
      title: "Movie One",
      number: 2,
    },

    {
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaorA3DgZOxyZpY0A8Mkbr_cAyYJ20A4LfqyfLDTVG-ygLoJXMavknMPylx9U43EmSPuWLyOI8IGEJa1euPb0RamjJsRgJ1ZtQg.webp?r=b61",
      title: "Movie One",
      number: 3,
    },

    {
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeikxOmGEO_Y-R8texJKA06Umf9iqSxqFGnus6nod1dFu7alDC-1scSVmL8JKqoEe4fY5QQnnhTaamrOQPeBRZoXHXYaNAynh5kmU0zUBKDfHOjEyC3qZyIF-F2W0lxSSLk8.webp?r=507",
      title: "Movie One",
      number: 4,
    },

    {
      image:
        "https://occ-0-64-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYMJOpwnAZIoMUgOROfg4f5HaS2Rs-vsp9ue-oVi_GpL52CBKfYbmqe7miOu8l3BDGv-6_r-5SsZUrBb4vPxDuKNnZotR0Un3O4Kyxh5fgqD2BnjYtqM4mKoepuEZeZrYfF5.webp?r=627",
      title: "Movie One",
      number: 5,
    },
  ];

  return (
    <section className="trending">
      <h2>Trending Now</h2>

      <div className="movie-list">
        {movies.map((movie) => (
          <Moviecard
            key={movie.number}
            image={movie.image}
            title={movie.title}
            number={movie.number}
          />
        ))}
      </div>
    </section>
  );
}

export default Trending;
