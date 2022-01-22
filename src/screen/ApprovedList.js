import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';
import {  Input, } from '../components';
import { List } from 'react-native-paper';


const ApprovedList = props => {
    const [list,setList]=useState(null);
    const [listApiData,setListApiData]=useState(null);
    const [err,setErr]=useState(null);
    const [search,setSearch]=useState("");
    const [expanded, setExpanded] = useState([]);

    const handlePress = (id) => {
        let arr=[...expanded];
        if(arr.includes(id)){
            arr.splice(arr.indexOf(id), 1);
        }
        else{
            arr.push(id);
        }
        setExpanded(arr)
    }

    useEffect(()=>{
        if(!list){
            getList()
        }
    },[list])

    const getList = async () => {
        try {
         const response = await fetch('https://api.jsonbin.io/b/60e7f4ebf72d2b70bbac2970');
         const json = await response.json();
         setList(json.data)
         setListApiData(json.data)
       } catch (error) {
         setErr(error)
       }
     }

     const searchProps = {
        placeholder: 'Search the title...',
        iconName: 'mail',
        name: 'mail',
        iconType: 'foundation',
        textAlign:"left",
        value: search,
        radius: 10,
        onChangeText: text => {
            setSearch(text)
            if(text==""){
                setList(listApiData)
            }
            else
                searchHandler(text)
        },
        autoCapitalize: 'none',
    };

    const searchHandler=(val)=>{
        let arr =[]
        for (var i=0; i < listApiData.length; i++) {
           if (new RegExp(val.toLowerCase()).test(listApiData[i].title.toLowerCase())){
                arr.push(listApiData[i])
            }
        }
         setList(arr) ;
    }


     const data=list?list.length>0?list.map((x,index)=> 
        <List.Section key={x.id}>
            <List.Accordion
            key={x.id}
            title={x.title}
            style={styles.acc}
            titleStyle={{color:index%2==0?'#ff9800':'#4caf50',fontSize:16,fontWeight:'bold'}}
            left={props => <List.Icon {...props} icon="folder" color="#15151699"/>}
            expanded={expanded.includes(x.id)}
            onPress={()=>handlePress(x.id)}>
            {x.data?x.data.map((item)=><List.Item key={item.id} title={item.title} key={item.id} style={styles.itemAccordion}/>
            ):null}
            </List.Accordion>
        </List.Section>
    ):<Text>No Data Found</Text>:null;


    return (
        <SafeAreaView style={styles.content}>
            <Text style={styles.heading}>Approved Foods List</Text>
            <View style={styles.listView}>
          <Input
            {...searchProps}
            leftIcon={styles.lefticon}
            leftIconContainerStyle={styles.leftContainer}
            inputContainerStyle={styles.inputContent}
            />
            </View>
            <ScrollView>
                <View style={styles.itemContent}>
                {data}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
content:{backgroundColor:'#67676759',flex:1},
heading:{fontWeight:'bold',textAlign:'left',padding:'4%',fontSize:18},
listView:{paddingTop:'4%'},
lefticon:{ type: 'font-awesome', name: 'search', color: 'black' },
leftContainer:{paddingLeft: 15,},
inputContent:{backgroundColor:'#ddd',borderRadius:15},
itemContent:{marginHorizontal:'3%'},
itemAccordion:{backgroundColor:'white',borderBottomWidth:1,borderColor:'#9e9e9e6e'},
acc:{margin:'1%',}
});





export default ApprovedList;


