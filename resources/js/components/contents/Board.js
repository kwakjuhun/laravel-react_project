import React, { Component } from 'react';
class Board extends Component{
    render(){
        var list = []
        var datas = [[0,'제목1','32'],[1,'제목2','53'],[2,'제목3','12']]
        var i = 0
        while(i < datas.length){
            var data = datas[i];
            list.push(
                <tr key={data[0]}>
                    <th>{data[0]}</th>
                    <th>{data[1]}</th>
                    <th>{data[2]}</th>
                </tr>
            )
            i = i + 1
        }
        // while(i < this.props.data.length){
        //     var data = this.props.data[i];
        //     list.push(
        //     <li key={data.id}>
        //         <a href={data.id+'.html'} onClick={function(id, e){
        //         e.preventDefault(); // 페이지 전환 막기
        //         this.props.onSelect(id);
        //         }.bind(this, data.id)}>
        //         {data.title}
        //         </a>
        //     </li>)
        //     i = i + 1;
        // }



        return(
            <div id="Board">
                <table>
                    <tbody>
                        <tr key='13'>
                            <th>번호</th>
                            <th>제목</th>
                            <th>조회수</th>
                        </tr>
                        {list}
                    </tbody>
                </table>
            </div>
      )
    }
}

export default Board;