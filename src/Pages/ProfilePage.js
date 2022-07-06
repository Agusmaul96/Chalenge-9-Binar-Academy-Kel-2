import React, { useState,useEffect} from "react";
import "./style/profile.css";
import {child, get, set} from "firebase/database";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Row, Card, CardHeader,CardBody,Button,Input,InputGroup} from "reactstrap"
import {dbRef} from "../services/firebase"
import { updatePassword, updateProfile,updateEmail } from "firebase/auth";
import {auth} from "../services/firebase"
import { ref, uploadBytes } from "firebase/storage";
import { useSelector} from "react-redux";
import {selectUser} from "../features/userSlice"



function ProfilePage() {
  const currentUser =useSelector(selectUser)
  const [name, SetName] = useState("Your Program");
  const [email, SetEmail] = useState("Your Program");
  const [score, SetScore] = useState("Your Score");
  const [city, setCity]=useState("")
  const [sosmed,setSosmed] = useState("")
  const [bio,setBio] = useState("")
  const [pp,setPp]=useState("")
  const [data,setData] = useState({})
  const [userId,setUserId] = useState("")
  const [editInput,setEditInput]=useState(false)
  const [inputEditEmail,setInputEditEmail]=useState(false)
  const [inputSosmed, setInputSosmed] = useState(false)
  const [inputCity,setInputCity] = useState(false)
  const [inputBio, setInputBio] = useState(false)
  const [inputOldPass,setInputOldPass] = useState(false)
  const [password, setPassword] = useState("")
  const [formChangePass, setFormChangePass] = useState("")
  const [image,setImage] = useState(null)

  useEffect(() => {
    if (currentUser) fetchUser();
  }, []);
  
  const fetchUser = () => {
    console.log("fetch user",currentUser.uid)
    get(child(dbRef, `/users/${currentUser.uid}`))
    .then((snapshot) => {
      console.log(snapshot.val())
      setData(snapshot.val())
      SetName(snapshot.val().username)
      SetEmail(snapshot.val().email)
      SetScore(snapshot.val().total_score)
      setPp(snapshot.val().photo_profile)
      setCity(snapshot.val().city)
      setSosmed(snapshot.val().sosmed)
      setBio(snapshot.val().bio)
    })
    .catch((error) => {
      console.error(error);
      console.log("gagal")
    });


  };
  const nameEdit=(event)=>{
    event.preventDefault();
    set(child(dbRef, `users/${userId}/username`), name);
    updateProfile(auth.currentUser,{
      displayName:name
    })
    setEditInput(false)
  }
  const emailEdit=(event)=>{
    event.preventDefault();
    updateEmail(auth.currentUser, email).then(() => {
      set(child(dbRef, `users/${userId}/email`), email);
      setInputEditEmail(false)
    }).catch((error) => {
      alert(error)
    });

  }
  const editSosmed=(event)=>{
    event.preventDefault();
    set(child(dbRef, `users/${userId}/sosmed`), sosmed);
    setInputSosmed(false)
  }
  const editCity=(event)=>{
    event.preventDefault();
    set(child(dbRef, `users/${userId}/city`), city);
    setInputCity(false)
  }
  const editBio=(event)=>{
    event.preventDefault();
    set(child(dbRef, `users/${userId}/bio`), bio);
    setInputBio(false)
  }
  // const validasiPass=async(event)=>{
  //   const pass=await (await get(child(dbRef, `/users/${currentUser.uid}/password`))).val()
  //   if (pass===password){
  //     setFormChangePass(true)
  //   }
  // }
  const editPass=(event)=>{
    event.preventDefault();
    const user=auth.currentUser
    console.log(user)
    updatePassword(user, password).then(() => {
      console.log("update sukses")
      set(child(dbRef, `users/${userId}/password`), password);
      setInputOldPass(false)
    }).catch((error) => {
      // An error ocurred
      // ...
    });

  }
  // const changePicture=(event)=>{
  //   const storageRef=ref(storage,'profile_pictures')
  //   uploadBytes(storageRef, file,image).then((snapshot) => {
  //     console.log(snapshot.val());
  //   })
  // }

  return (
    <div className="head">
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src={pp} alt="profile"></img>
        </div>
      </div>
      <div className="lower-container">
        <h3> {name}</h3>
        <h5>Score: {score} </h5>
      </div>
    </div>
    <Row className="side-head">
      <Card>
        <CardHeader tag="h3">
          Basic Info
        </CardHeader>
        <CardBody>
          <div className="d-inline-flex w-100 mt-3">
            <div className="w-25 text-muted">Photo</div>
            <InputGroup>
                <Input type="file" class="form-control" id="customFile" onChange={(e)=>setImage(e.target.files[0])}/>
                  <Button className="input-button">
                    save
                  </Button>
              </InputGroup>
            {/* <div className="w-75 text-muted">Add personal photo</div> */}
          </div>
          <div className="d-inline-flex w-100 mt-3">
            <div className="w-25 text-muted">Username</div>
            {!editInput?(
              <>
              <div className="w-75 h5">{name}</div>
              <i onClick={()=>setEditInput(true)} class="bi bi-stickies"></i>
              </>
            ):(
              <InputGroup>
                <Input value={name} onChange={(e)=>SetName(e.target.value)}/>
                  <Button className="input-button" onClick={nameEdit}>
                    save
                  </Button>
              </InputGroup>
            )}

          </div>
          <div className="d-inline-flex w-100 mt-3">
            <div className="w-25 text-muted">Email</div>
            {!inputEditEmail?(
              <>
              <div className="w-75 h5">{email}</div>
              <i onClick={()=>setInputEditEmail(true)} class="bi bi-stickies"></i>
              </>
            ):(
              <InputGroup>
                <Input value={email} onChange={(e)=>SetEmail(e.target.value)}/>
                  <Button className="input-button" onClick={emailEdit}>
                    save
                  </Button>
              </InputGroup>
            )}
          </div>
      </CardBody>
      </Card>

      <Card className="mt-4">
        <CardHeader tag="h3">Personal Info</CardHeader>
        <CardBody>
          <div className="d-inline-flex w-100 mt-3">
            <div className="w-25 text-muted">City</div>
            {inputCity ? (
              <InputGroup>
              <Input value={city} onChange={(e)=>setCity(e.target.value)}/>
                <Button className="input-button" onClick={editCity}>
                  save
                </Button>
              </InputGroup>                 
            ):(
              <>
              <div className="w-75 h5">{city}</div>
              <i class="bi bi-stickies" onClick={()=>setInputCity(true)}></i>
              </>
            )}

          </div>
          <div className="d-inline-flex w-100 mt-3">
          <div className="w-25 text-muted">Sosial Media</div>
            {inputSosmed ? (
              <InputGroup>
              <Input value={sosmed} onChange={(e)=>setSosmed(e.target.value)}/>
                <Button className="input-button" onClick={editSosmed}>
                  save
                </Button>
              </InputGroup>              
            ):(
              <>
              <div className="w-75 h5">{sosmed}</div>
              <i class="bi bi-stickies" onClick={()=>setInputSosmed(true)}></i>
              </>
            )}

          </div>
          <div className="d-inline-flex w-100 mt-3">
            <div className="w-25 text-muted">Biografi</div>
            {inputBio ? (
              <InputGroup>
              <Input value={bio} onChange={(e)=>setBio(e.target.value)}/>
                <Button className="input-button" onClick={editBio}>
                  save
                </Button>
              </InputGroup>  
            ):(
              <>
                <div className="w-75 h5">{bio}</div>
                <i class="bi bi-stickies" onClick={()=>setInputBio(true)}></i>
              </>
            )}

          </div>
        </CardBody>
      </Card>
      <Card className="mt-4">
        <CardHeader tag="h3">Security</CardHeader>
        <CardBody>
        <div className="d-inline-flex w-100 mt-3">
          <div className="w-25 text-muted">Password</div>
          {inputOldPass ? (
              <InputGroup>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button className="input-button" onClick={editPass}>
                  save
                </Button>
              </InputGroup>  
          ):(
            <>
              <div className="w-75 h5">********</div>
              <i class="bi bi-stickies" onClick={()=>setInputOldPass(true)}></i>
            </>
          )}
      </div>
        </CardBody>
      </Card>

    </Row>

    </div>
  );
}

export default ProfilePage;
