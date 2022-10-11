import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import "draft-js/dist/Draft.css";
import React, { useState, useEffect, useRef } from "react";
import about from "../images/about.jpg";
import wushu from "../images/wushu.jpg";
import { Container } from "@mui/system";
import { Editor } from "@tinymce/tinymce-react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { sgMail } from "@sendgrid/mail";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import {
  bgColorPrimary,
  bgColorPrimaryNoBlur,
  bgColorSecondary,
  bgColorSecondaryNoBlur,
  fontColorPrimary,
  fontPrimary,
} from "../styles/ColorsFonts";

function Email() {
  const editorRef = useRef(null);
  const [openSend, setOpenSend] = useState(false);
  const [confirmSend, setConfirmSend] = useState(null);
  const handleSend = (event) => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    setOpenSend(false);
  };
  const handleChange = (event) => {
    setConfirmSend(event.target.value);
  };
  const handleSubmit = () => {
    if (confirmSend != null) {
      setOpenSend(true);
    } else {
      return alert("Please select who you want to send this email");
    }
  };
  return (
    <Container sx={{ width: "130%", ml: -5 }}>
      <Dialog
        open={openSend}
        onClose={() => {
          setOpenSend(false);
        }}
      >
        <DialogTitle id="confirm-send">
          {"Are you sure you want to send this email?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-send-description">
            You are about to send this email to <strong>{confirmSend}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenSend(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSend} autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <FormControl>
        <Typography
          variant="h5"
          fontFamily={"New Rock"}
          color={fontColorPrimary}
        >
          Send Email To:
        </Typography>
        <RadioGroup
          row
          name="receivers-options"
          value={confirmSend}
          onChange={handleChange}
        >
          <FormControlLabel value="myself" control={<Radio />} label="myself" />
          <FormControlLabel
            value="all members"
            control={<Radio />}
            label="all members"
          />
        </RadioGroup>
      </FormControl>
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        apiKey="bm81p0e6ukka2ds8wfvn4ul9565n98ujuy0bgsw7xofn65ce"
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          selector: "textarea",
          block_unsupported_drop: false,
          file_picker_types: "file image media",
          images_upload_url: "postAcceptor.php",
          images_dataimg_filter: function (img) {
            return !img.hasAttribute("internal-blob"); // blocks the upload of <img> elements with the attribute "internal-blob".
          },
          images_file_types: "jpg,svg,png,webp, jpeg",
          images_reuse_filename: true,
          plugins:
            "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
          imagetools_cors_hosts: ["picsum.photos"],
          menubar: "file edit view insert format tools table help",
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          toolbar_sticky: true,
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_prefix: "{path}{query}-{id}-",
          autosave_restore_when_empty: false,
          autosave_retention: "2m",
          image_advtab: true,
          link_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_class_list: [
            { title: "None", value: "" },
            { title: "Some class", value: "class-name" },
          ],
          importcss_append: true,
          file_picker_callback: function (callback, value, meta) {
            /* Provide file and text for the link dialog */
            if (meta.filetype === "file") {
              callback("https://www.google.com/logos/google.jpg", {
                text: "My text",
              });
            }

            /* Provide image and alt text for the image dialog */
            if (meta.filetype === "image") {
              callback("https://www.google.com/logos/google.jpg", {
                alt: "My alt text",
              });
            }

            /* Provide alternative source and posted for the media dialog */
            if (meta.filetype === "media") {
              callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "https://www.google.com/logos/google.jpg",
              });
            }
          },
          templates: [
            {
              title: "New Table",
              description: "creates a new table",
              content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
            },
            {
              title: "Starting my story",
              description: "A cure for writers block",
              content: "Once upon a time...",
            },
            {
              title: "New list with dates",
              description: "New List with dates",
              content:
                '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
            },
          ],
          template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
          template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
          height: 300,
          image_caption: true,
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          noneditable_noneditable_class: "mceNonEditable",
          toolbar_mode: "sliding",
          contextmenu: "link image imagetools table",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Button
        onClick={handleSubmit}
        sx={{
          color: fontColorPrimary,
          bgcolor: bgColorPrimary,
          ":hover": { bgcolor: bgColorSecondary },
          width: "100%",
          my: 3,
        }}
        variant={"contained"}
      >
        Send Email
      </Button>
    </Container>
  );
}

export default Email;
