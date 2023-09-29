/**
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                        ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                   //
//                                                                                                      // 
//                                             Ｖ：１．０．０                                            // 
//     ███████╗██╗      ██████╗     ██╗  ██╗██╗     ███████╗ █████╗ ██████╗ ███████╗██████╗             //
//     ██╔════╝██║     ██╔════╝     ╚██╗██╔╝██║     ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗            //
//     ███████╗██║     ██║  ███╗     ╚███╔╝ ██║     █████╗  ███████║██║  ██║█████╗  ██████╔╝            //
//     ╚════██║██║     ██║   ██║     ██╔██╗ ██║     ██╔══╝  ██╔══██║██║  ██║██╔══╝  ██╔══██╗            //
//     ███████║███████╗╚██████╔╝    ██╔╝ ██╗███████╗███████╗██║  ██║██████╔╝███████╗██║  ██║            //
//     ╚══════╝╚══════╝ ╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝            //
                                                                                                        //                                                                                    //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : SLGxLEADER
   * @author : SLGxLEADER
   * @youtube : https://www.youtube.com/c/@SLGLEADER
   * @description : SLGxLEADER ,A Multi-functional whatsapp user bot.
   * @version 1.0.0
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By SLGxLEADER BOT Info.
   * © 2023 SLGxLEADER BOT.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 **/

//---------------------------------------------------------------------------
const { smd }   = require('../lib');
const util = require('util');
const axios = require('axios');
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
smd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "converter",
        filename: __filename,
    },
    async(SLGxLEADER, msg,text) => {
 if (!text) { text=msg.quoted.text;}
        if(!text) return msg.send('Please reply to any text to get link.');
        let data = await pastebin.createPaste(text, "SLG TEAM INFO");
        return msg.send('_Here is your link._\n'+data+'\n*Click to Get Your Text*');
    }
);
//----------------------------------------------- ---------------------------
smd({
        pattern: "paste",
        desc: "create paste of text.",
        category: "converter",
        filename: __filename,
    },
    async(SLGxLEADER, msg,text) => {
 let a = msg.quoted ? msg.quoted.text : msg.text;
   try{   
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=SLGxLEADER-BOT+Bot&author_name=POORNA&content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return msg.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)

   }catch(e){return await msg.error(e)}
});
 
