import React from "react"
import Header from "../components/header"
import styles from "./index.module.css"
import ColumnOne from "../components/column-one"
import ColumnTwo from "../components/column-two"
import ColumnThree from "../components/column-three"
import ColumnFour from "../components/column-four"

export default () => <div>
     <div className={styles.header} >  <Header /> </div>
     <div style={{textAlign:"center"}}>
   <p>  श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि । </p>
 <p>बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥ </p>

<p>बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार</p>
<p>बल बुधि विद्या देहु मोहि, हरहु कलेश विकार</p>
     </div>
    <div className={styles.container}>
       <div>  <ColumnOne /> </div>
       <div>  <ColumnTwo /> </div>
       <div> <ColumnThree /> </div>
       <div> <ColumnFour /> </div>
    </div>
    <div style={{textAlign:"center"}}>
  <p>  पवन तनय संकट हरन, मंगल मूरति रूप। </p>
<p>राम लखन सीता सहित, हृदय बसहु सुर भूप॥ </p>
    </div>
    </div>
