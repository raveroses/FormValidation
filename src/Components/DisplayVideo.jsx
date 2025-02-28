import { useParams } from "react-router-dom";
import useFetch from "./api/UseFetch";
import { useEffect } from "react";
export default function DisplayVideo() {
  let param = useParams();
  const convert = Number(param.videoId.replace(":", "").trim());
  const { dataSetter, loading, fetchMovie } = useFetch(
    `      https://api.themoviedb.org/3/tv/${convert}/videos?api_key=b23cab54b01ec0634aae0d6fc905411b`
  );
  console.log(convert);
  console.log(dataSetter);
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, totam
      doloribus impedit nemo sapiente facere vitae sit harum maxime nulla earum
      repudiandae soluta eum porro explicabo nisi ab pariatur quibusdam. Nemo a
      harum blanditiis id unde corporis facilis quod vitae accusamus natus
      exercitationem illo fuga nostrum inventore est esse vero, perspiciatis ut
      quidem nulla vel distinctio ducimus labore? Voluptate, obcaecati! Nisi rem
      hic sint facilis dicta molestiae neque cum nulla in veritatis, mollitia
      corporis maiores unde eaque quasi minus iste culpa fugit qui! Eius nulla
      dolorem quidem, autem debitis similique! Accusantium quas maxime in animi,
      atque, laboriosam nostrum maiores nesciunt neque autem eum debitis nihil
      explicabo dolores non quia et ad iste reprehenderit aliquam dicta!
      Officiis est ipsa quo perferendis. Nulla culpa explicabo quia recusandae
      eveniet? Tenetur illum labore accusantium dolorum ipsa quasi adipisci
      voluptatum nulla corporis esse cumque, sit ipsam. Qui odio dicta eligendi
      reiciendis sed veniam dolor nihil? Perferendis, dignissimos! Nemo facere
      culpa fugit fuga minus reprehenderit recusandae debitis sint impedit nulla
      aperiam provident ipsa aliquam voluptate odio mollitia nobis nostrum,
      veritatis illum voluptatem temporibus commodi! Aliquid, tenetur?
    </>
  );
}
