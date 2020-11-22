import styled from 'styled-components';
const TableWrapper = styled.div`
    .table-responsive{
        height: 70vh;
        table{
            background:"#1c1e20";
            color:"#52585f";
             font-size:"12px";
            // opacity: 0.80;
            // cursor: pointer;
            padding: 0 15px;
            border-collapse: separate;
            border-spacing: 0 10px;
           
    thead th {
        border: none;
        padding:10px 13px;
        .ticon{
            visibility:hidden; 
        }
        .ticon1:hover{
            .ticon{
                visibility: visible;            
            }
           } 
      }
    
      
            tbody{
                height:200px;
                overflow:scroll;
            }
            
            tbody tr{
                color:"mintcream";
                background:"#161819";
                border-radius:15px;
                margin:15px !important;
                &:hover{
                    background:#111111;   
                    .rowOption {
                        .btmIcon{
                            visibility:visible !important;
                        }
                    }
                }
           
            }
        }
    }
        .table th{
            padding: 0.35rem;
        }
    .table td, .table th{
        border-top:2px solid transparent;
        border-bottom:2px solid transparent;
        
        &:first-child{
            border-left:2px solid transparent;
        }
        
        &:last-child{
            border-right:2px solid transparent;
        }
    }
    td {
        border-style: solid none;
        padding: 15px;
        
        &:first-child{
            border-top-left-radius: 5px; 
            border-bottom-left-radius: 5px;
        }
       
        &:last-child{
            border-bottom-right-radius: 5px; 
            border-top-right-radius: 5px; 
        }
        
    }
   
    
 
  
    .tableHeader{
        overflow: hidden;
        width: calc(100% - 100px);
        margin-left: 30px;
        justify-content: space-between;
        display: inline-flex;
    }
    .mb-3 {
        width:100%;
        margin-top: 11px;
        background:transparent

    }

.input-group .form-control:last-child
{
    background:transparent !important;
    border: 0.5px solid #52585F !important;
    margin-bottom: 10px;
}    .searchBar{
        display:flex;
        width:100%;
        .icon {
           // background-color: #4b4f55;
           
        }        
        .inpWidth{
            width:calc(100% - 10px);
        }
    }
   
   
`;
export default TableWrapper;