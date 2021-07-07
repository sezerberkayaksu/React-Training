import React from "react";
function ListItem(props){
	return <li>{props.value}</li>
}
class SayiListesi extends React.Component {
  render() {
		const ilkListe = this.props.dizi;
    const doubled = ilkListe.map((sayi) => sayi * 2);
    const sayilar = doubled.map((sayi) => <ListItem key = {sayi} value = {sayi} />);
    return <div>
			<ul>
				{sayilar}
			</ul>
		</div>;
  }
}
export default SayiListesi;
