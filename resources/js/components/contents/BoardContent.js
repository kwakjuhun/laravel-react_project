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

        return(
            <div id="BoardContent">
                
            </div>
      )
    }
}

export default Board;