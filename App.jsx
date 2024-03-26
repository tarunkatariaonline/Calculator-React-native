import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useRef,useCallback } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,PanResponder} from 'react-native';

export default function App() {
  const [result,setResult] = useState("0");

 
  const calculatorBtns =[
    {
      id:0,
      name:"AC",
      value:"AC",
      bgColor:"rgba(192, 193, 194,1)",
      color:"black"
    },
    {
      id:1,
      name:"+/-",
      value:"+",
      bgColor:"rgba(192, 193, 194,1)",
      color:"black"
    },
    {
      id:2,
      name:"%",
      value:"%", 
      bgColor:"rgba(192, 193, 194,1)",
      color:"black"
    },
    {
      id:3,
      name:"÷",
      value:"/",
      bgColor:"rgba(235, 182, 26,1)",
      color:"white"
    },
    {
      id:4,
      name:"7",
      value:"7",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
    {
      id:5,
      name:"8",
      value:"8",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
    {
      id:6,
      name:"9",
      value:"9" ,
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },{
      id:7,
      name:"X",
      value:"*",
      bgColor:"rgba(235, 182, 26,1)",
      color:"white"
    },{
      id:8,
      name:"4",
      value:"4",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
    {
      id:9,
      name:"5",
      value:"5",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },

    {
      id:10,
      name:"6",
      value:"6",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
   

    {
      id:11,
      name:"-",
      value:"-",
      bgColor:"rgba(235, 182, 26,1)",
      color:"white"
    }, {
      id:12,
      name:"1",
      value:"1",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },

     {
      id:13,
      name:"2",
      value:"2",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
    {
      id:14,
      name:"3",
      value:"3",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
     {
      id:15,
      name:"+",
      value:"+",
      bgColor:"rgba(235, 182, 26,1)",
      color:"white"
    },
     {
      id:16,
      name:"0",
      value:"0",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
    {
      id:17,
      name:".",
      value:".",
      bgColor:"rgba(57, 58, 59,0.8)",
      color:"white"
    },
     {
      id:18,
      name:"=",
      value:"=",
      bgColor:"rgba(235, 182, 26,1)",
      color:"white"
    }
    
  ]


  const handlerResultCut = useCallback(() => {

    console.log(result)



    
      setResult((prevRes)=>prevRes.toString().slice(0,prevRes.toString().length-1));
 
   
  }, []);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // You can handle swipe movement here
        // console.log(evt)
        // console.log(gestureState.dx)
       
       
        // For example, you can check the direction of the swipe
        // by comparing gestureState.dx and gestureState.dy
      },
      onPanResponderRelease: (evt, gestureState) => {
        // You can handle the end of the swipe here
        // For example, you can check if the swipe is left or right
        // based on gestureState.dx and gestureState.dy
      
        if(gestureState.dx>50){
         
          handlerResultCut()
          //  const res = result.slice(0,result.length-1);

  
          }
        if(gestureState.dx<-50){
           handlerResultCut()
        }
      },
    })
  ).current;
  
  return (
    <View style={styles.container}>
     
    <View style={styles.container1}     {...panResponder.panHandlers}>
       <Text style={{fontSize:70,color:"white",marginRight:25}}>{(result.length===0?"0":result)}</Text>
    </View>
    <View style={styles.container2}>


      {calculatorBtns.map(( btn)=>{
        return  <TouchableOpacity onPress={(()=>{
          try{
            if(btn.name=="AC"){
              setResult("")
            }else if (btn.name==="="){
             
           
            
                if(result.length===0){
                  setResult("");
                }else{
                  
               
                  setResult(eval(result))
                }
            
               
             
             
            }
            else if(btn.name=='+'|| btn.name=="-"|| btn.name=="X" || btn.name=="÷" || btn.name=='%' || btn.name=='.'){
              if(result.length==0){
                setResult("0"+btn.value)
              }else if(result[result.length-1]=='+'||result[result.length-1]=='-'|| result[result.length-1]=='*'||result[result.length-1]=='/'|| result[result.length-1]=='%' || result[result.length-1]=='.'){
              let str = result.slice(0,result.length-1);
              str = str+btn.value;
              setResult(str)
  
              }else{
                setResult(result+btn.value)
              }
            }
            else{
              if(btn.name==='+/-'){
                  
                 if(result[0]==='+' ){
                  let str = result.slice(1,result.length);
                  setResult('-'+str)
                 }else if (result[0]==='-'){
                  let str = result.slice(1,result.length);
                  setResult('+'+str)
                 }else{
                  setResult('+'+result)
                 }
                  console.log("+"+result)
                 
                  
              } else if(result.length===1 && result[0]=='0'){
              setResult(btn.value)
              }else{
              setResult(result+btn.value)
              }
            
            }
      
          }catch(err){
           
            console.log("error")
            setResult(result)

          }
            })} key={btn.id} style={{backgroundColor:btn.bgColor,width:(btn.name==="0"?160:70) ,height:70,justifyContent:"center",alignItems:"center",padding:0,margin:10,borderRadius:50}}  >
        <Text style={{fontSize:(btn.name==="÷"?45:30),justifyContent:"center",alignItems:"center",color:btn.color,margin:0}}> {btn.name} </Text>
      </TouchableOpacity>
      })}
   

     

     
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{
    backgroundColor:"black",
    height:"42%",
    width:"100%",
    justifyContent:"flex-end",
    alignItems:"flex-end",
    padding:5,
    
  
    
  
  },
  container2:{
    backgroundColor:"black",
    height:"58%",
    width:"100%",
    padding:15,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center"
  }

});
