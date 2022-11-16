import { Button, Select } from "@chakra-ui/react";
import React from "react";

const EditorComponent = ({
  variables,
  handleSelection,
  applicationRef,
  handleRef,
  handleLanguageSelection,
  language,
}) => {
  let index = 0;

  return (
    <div className="w-full p-2 mx-auto mb-6">
      <div className="w-11/12 mx-auto my-4 flex items-center justify-between px-1">
        <div className="xl:w-1/3 lg:w-1/4">
          <select
            aria-current={language}
            className="focus:outline-none rounded-lg bg-green-700  p-1 text-white w-full "
            placeholder="Choose a language"
            onChange={(e) => handleLanguageSelection(e.target.value)}
          >
            <option value="en">English</option>
            <option value="bn">Bengali</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
        <Button colorScheme={"red"} onClick={handleRef}>
          Preview
        </Button>
      </div>

      {language === "en" && (
        <div
          className="shadow-md rounded-md px-2 p-2 bg-white "
          ref={applicationRef}
          id="tomail"
        >
          <div className="w-full ">
            <img
              src="/tvslogo_2.png"
              className="w-52 object-fit"
              alt="tvs logo"
              height={50}
              width={50}
            />
          </div>
          <div className="w-full  mx-auto px-1 flex items-center justify-end">
            <div className="flex flex-col items-center">
              <p className="text-lg text-center font-bold">
                TVS Credit Services Limited
              </p>
              <p className="text-lg text-center font-bold">
                Jayalakshmi Estates, Third Floor,
              </p>
              <p className="text-lg text-center font-bold break-all">
                29, Haddows Road, Nungambakkam, Chennai
              </p>
              <p className="text-lg text-center font-bold">Tamil Nadu 600006</p>
              <p className="text-lg text-center font-bold">
                Web: www.tvscredit.com
              </p>
              <p className="text-lg text-center font-bold">
                Phone: 1800 425 3883
              </p>
              <p className="text-lg text-center font-bold">
                Email: helpdesk@tvscredit.com
              </p>
              <div className="mx-auto text-left w-2/3">
                <p className="text-black text-lg font-bold">
                  Date:
                  <span
                    className="text-black text-left font-normal outline-none cursor-pointer hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition"
                    onClick={() => handleSelection(variables[index].id)}
                  >
                    {variables[index].data === "" ? (
                      <b>{`[${variables[index].name}]`}</b>
                    ) : (
                      <b>{`${variables[index].data}`}</b>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-8">
            <h2 className="text-center text-black text-2xl font-semibold  font-serif">
              Sanction Letter
            </h2>
          </div>

          <div className="my-2 h-full p-2 text-lg    w-full">
            <p
              className="text-black text-left font-semibold hover:font-bold hover:shadow-md w-fit   hover:bg-slate-300 duration-300 transition cursor-pointer"
              onClick={() => handleSelection(variables[index + 1].id)}
            >
              {variables[index + 1].data.length === 0 ? (
                <b>{`[${variables[index + 1].name}]`}</b>
              ) : (
                <b>{`${variables[index + 1].data}`}</b>
              )}
            </p>
            <p className="text-black text-left">Dear Sir/Madam,</p>
            <p className="text-black text-left">
              Sub-Sanction Letter -{" "}
              <span
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                onClick={() => handleSelection(variables[index + 2].id)}
              >
                {variables[index + 2].data.length === 0 ? (
                  <b>{`[${variables[index + 2].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 2].data}`}</b>
                )}
              </span>{" "}
              Dealer Copy{" "}
            </p>
            <br />
            <p className="text-black text-left">
              We have sanctioned a loan facility for{" "}
              <span
                onClick={() => handleSelection(variables[index + 3].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {variables[index + 3].data.length === 0 ? (
                  <b>{`[${variables[index + 3].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 3].data}`}</b>
                )}
              </span>{" "}
              for the purchase of item{" "}
              <span
                onClick={() => handleSelection(variables[index + 4].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {variables[index + 4].data.length === 0 ? (
                  <b>{`[${variables[index + 4].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 4].data}`}</b>
                )}
              </span>
              . Pursuant to the agreement executed by the customer in our favour
              with respect to the loan facility and on the basis of the
              instructions of the Customer we are disbursing the following
              amount in your favour.
            </p>
            <br />
            <p className="text-black text-left">
              Kindly arrange the delivery of the product to the customer at the
              below address only.
            </p>
            <p className="text-black text-left">
              Customer Name:{" "}
              <span
                onClick={() => handleSelection(variables[index + 3].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 3].data.length === 0 ? (
                    <b>{`[${variables[index + 3].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 3].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              Mobile Number:{" "}
              <span
                onClick={() => handleSelection(variables[index + 5].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 5].data.length === 0 ? (
                    <b>{`[${variables[index + 5].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 5].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              Customer Address:
              <span
                onClick={() => handleSelection(variables[index + 6].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 6].data.length === 0 ? (
                    <b>{`[${variables[index + 6].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 6].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              Product Brand:{" "}
              <span
                onClick={() => handleSelection(variables[index + 7].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {" "}
                <b>
                  {variables[index + 7].data.length === 0 ? (
                    <b>{`[${variables[index + 7].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 7].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              Product category and make:{" "}
              <span
                onClick={() => handleSelection(variables[index + 8].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 8].data.length === 0 ? (
                    <b>{`[${variables[index + 8].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 8].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              Product Model:{" "}
              <span
                onClick={() => handleSelection(variables[index + 9].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {" "}
                <b>
                  {variables[index + 9].data.length === 0 ? (
                    <b>{`[${variables[index + 9].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 9].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              Scheme Code:
              <span
                onClick={() => handleSelection(variables[index + 10].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 10].data.length === 0 ? (
                    <b>{`[${variables[index + 10].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 10].data}`}</b>
                  )}
                </b>
              </span>
              & EMI:
              <span
                onClick={() => handleSelection(variables[index + 11].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 11].data.length === 0 ? (
                    <b>{`[${variables[index + 11].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 11].data}`}</b>
                  )}
                </b>
              </span>{" "}
            </p>
            <br />

            <br />

            <table className="text-black text-center">
              <thead>
                <tr>
                  <th>Details</th>
                  <th>Amount in ₹</th>
                  <th>Deductions by TVS</th>
                  <th>Amount in ₹</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A. Product Cost</td>
                  <td
                    onClick={() => handleSelection(variables[index + 12].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 12].data.length === 0 ? (
                      <b>{`[${variables[index + 12].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 12].data}`}</b>
                    )}
                  </td>

                  <td>1. Processing fees</td>
                  <td
                    onClick={() => handleSelection(variables[index + 13].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 13].data.length === 0 ? (
                      <b>{`[${variables[index + 13].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 13].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>B. Margin Money</td>
                  <td
                    onClick={() => handleSelection(variables[index + 14].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 14].data.length === 0 ? (
                      <b>{`[${variables[index + 14].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 14].data}`}</b>
                    )}
                  </td>
                  <td>2. Advance EMi</td>
                  <td
                    onClick={() => handleSelection(variables[index + 15].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 15].data.length === 0 ? (
                      <b>{`[${variables[index + 15].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 15].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>C. Finance Amount</td>
                  <td
                    onClick={() => handleSelection(variables[index + 16].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 16].data.length === 0 ? (
                      <b>{`[${variables[index + 16].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 16].data}`}</b>
                    )}
                  </td>
                  <td>3. Dealer Subvention</td>
                  <td
                    onClick={() => handleSelection(variables[index + 17].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 17].data.length === 0 ? (
                      <b>{`[${variables[index + 17].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 17].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>D. Deductions by TVS</td>
                  <td
                    onClick={() => handleSelection(variables[index + 18].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 18].data.length === 0 ? (
                      <b>{`[${variables[index + 18].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 18].data}`}</b>
                    )}
                  </td>
                  <td>4. Other charges if any</td>
                  <td
                    onClick={() => handleSelection(variables[index + 19].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 19].data.length === 0 ? (
                      <b>{`[${variables[index + 19].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 19].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>E. Total Amount to be collected from the customer</b>
                  </td>
                  <td
                    onClick={() => handleSelection(variables[index + 20].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 20].data.length === 0 ? (
                      <b>{`[${variables[index + 20].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 20].data}`}</b>
                    )}
                  </td>
                  <td>5. Extended Warranty</td>
                  <td
                    onClick={() => handleSelection(variables[index + 21].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 21].data.length === 0 ? (
                      <b>{`[${variables[index + 21].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 21].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>F. Net Loan Amount</td>
                  <td
                    onClick={() => handleSelection(variables[index + 22].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 22].data.length === 0 ? (
                      <b>{`[${variables[index + 22].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 22].data}`}</b>
                    )}
                  </td>
                  <td>6. Insurance</td>
                  <td
                    onClick={() => handleSelection(variables[index + 23].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 23].data.length === 0 ? (
                      <b>{`[${variables[index + 23].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 23].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>G. Final Disbursement Amount</td>
                  <td
                    onClick={() => handleSelection(variables[index + 24].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 24].data.length === 0 ? (
                      <b>{`[${variables[index + 24].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 24].data}`}</b>
                    )}
                  </td>
                  <td>7. Asset Insurance</td>
                  <td
                    onClick={() => handleSelection(variables[index + 25].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 25].data.length === 0 ? (
                      <b>{`[${variables[index + 25].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 25].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>8. Insta card enrollment fee</td>
                  <td
                    onClick={() => handleSelection(variables[index + 26].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 26].data.length === 0 ? (
                      <b>{`[${variables[index + 26].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 26].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Sum of deductions</td>
                  <td
                    onClick={() => handleSelection(variables[index + 27].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 27].data.length === 0 ? (
                      <b>{`[${variables[index + 27].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 27].data}`}</b>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
              <p className="text-black text-left font-bold underline">Terms</p>
              <p className="text-black text-left">
                - Any amount more than the Final Disbursement Amount is to be
                collected from the customer before release of the Product.
              </p>
              <p className="text-black text-left">
                - The Final Disbursement Amount would be paid to you on the
                explicit understanding that any sun payable/refundable by you to
                the customer, would be paid/refunded by you, only to us, i.e.
                TVS Credit Services Limited
              </p>
              <p className="text-black text-left">
                - Original Financier copy of the Invoice with HYP marked to TVS
                Credit Services Limited, copy of duly receipted Delivery.
                Challan/Invoice/Delivery Receipt/Margin Money Receipt, ACH with
                signature as per Signature Proof and all relevant
                Pre-Disbursement documents clear copy should be sent to TVS
                Credit Services, for processing the final disbursement Amount.
                Further, Saathi app should be installed as applicable.
              </p>
              <p className="text-black text-left">
                - Funded Product should be delivered at the above Customer
                Address only. Change in the place of delivery will not to be
                entertained at any point of time.
              </p>
              <p className="text-black text-left">
                - This Sanction Letter is valid for 10 days from the date of
                issue and automatically expires unless renewed.It can also be
                revoked by us during it currency before the delivery with
                intimation to you number of days is changed.
              </p>
              <p className="text-black text-left">
                - Assets where serial number validation is mandatory , Liability
                of TVS Credit Services Limited arise only after successful
                validation of Serial number.
              </p>
              <br />
              <p className="text-black text-left font-bold underline">
                Payment Terms
              </p>
              <p className="text-black text-left">
                - We shall release the payment as per the agreed terms mutually.
              </p>
              <p className="text-black text-left">
                <b>Note: </b>This is computer generated Sanction Letter
                Signature not required.
              </p>
              <p
                className="text-black text-left hover:font-bold hover:shadow-md w-fit  hover:bg-slate-300 duration-300 transition cursor-pointer"
                onClick={() => handleSelection(variables[index + 28].id)}
              >
                {variables[index + 28].data.length === 0 ? (
                  <b>{`[${variables[index + 28].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 28].data}`}</b>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
      {language === "bn" && (
        <div
          className="shadow-md rounded-md px-2 p-2 bg-white "
          ref={applicationRef}
        >
          <div className="w-full ">
            <img
              src="/tvslogo_2.png"
              className="w-52 object-fit"
              alt="tvs logo"
              height={50}
              width={50}
            />
          </div>
          <div className="w-full  mx-auto px-1 flex items-center justify-end">
            <div className="flex flex-col items-center">
              <p className="text-lg text-center font-bold">
                TVS Credit Services Limited
              </p>
              <p className="text-lg text-center font-bold">
                Jayalakshmi Estates, Third Floor,
              </p>
              <p className="text-lg text-center font-bold break-all">
                29, Haddows Road, Nungambakkam, Chennai
              </p>
              <p className="text-lg text-center font-bold">Tamil Nadu 600006</p>
              <p className="text-lg text-center font-bold">
                Web: www.tvscredit.com
              </p>
              <p className="text-lg text-center font-bold">
                Phone: 1800 425 3883
              </p>
              <p className="text-lg text-center font-bold">
                Email: helpdesk@tvscredit.com
              </p>
              <div className="mx-auto text-left w-2/3">
                <p className="text-black text-lg font-bold">
                  তারিখ:
                  <span
                    className="text-black text-left font-normal outline-none cursor-pointer hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition"
                    onClick={() => handleSelection(variables[index].id)}
                  >
                    {variables[index].data === "" ? (
                      <b>{`[${variables[index].name}]`}</b>
                    ) : (
                      <b>{`${variables[index].data}`}</b>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-8">
            <h2 className="text-center text-black text-2xl font-semibold underline font-serif">
              অনুমোদনের চিঠি
            </h2>
          </div>

          <div className="my-2 h-full p-2 text-lg    w-full">
            <p
              className="text-black text-left font-semibold hover:font-bold hover:shadow-md w-fit   hover:bg-slate-300 duration-300 transition cursor-pointer"
              onClick={() => handleSelection(variables[index + 1].id)}
            >
              {variables[index + 1].data.length === 0 ? (
                <b>{`[${variables[index + 1].name}]`}</b>
              ) : (
                <b>{`${variables[index + 1].data}`}</b>
              )}
            </p>
            <p className="text-black text-left">মহাশয়,</p>
            <p className="text-black text-left">
              বিষয় : অনুমোদনের চিঠি -{" "}
              <span
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                onClick={() => handleSelection(variables[index + 2].id)}
              >
                {variables[index + 2].data.length === 0 ? (
                  <b>{`[${variables[index + 2].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 2].data}`}</b>
                )}
              </span>{" "}
              ডিলার কপি{" "}
            </p>
            <br />
            <p className="text-black text-left">
              আমরা আমােদর গ্রাহক{" "}
              <span
                onClick={() => handleSelection(variables[index + 3].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {variables[index + 3].data.length === 0 ? (
                  <b>{`[${variables[index + 3].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 3].data}`}</b>
                )}
              </span>
              কে{" "}
              <span
                onClick={() => handleSelection(variables[index + 4].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {variables[index + 4].data.length === 0 ? (
                  <b>{`[${variables[index + 4].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 4].data}`}</b>
                )}
              </span>
              . লোন সুবিধার বিষয়ে এবং গ্রাহকের নির্দেশের ভিত্তিতে গ্রাহকের
              দ্বারা আমাদের পক্ষে সম্পাদিত চুক্তি অনুসারে আমরা আপনার পক্ষে
              নিম্নলিখিত পরিমাণ বিতরণ করছি।
            </p>
            <br />
            <p className="text-black text-left">
              অনুগ্রহ করে শুধুমাত্র নীচের ঠিকানায় গ্রাহকের কাছে পণ্য সরবরাহের
              ব্যবস্থা করুন।
            </p>
            <p className="text-black text-left">
              ক্রেতার নাম:{" "}
              <span
                onClick={() => handleSelection(variables[index + 4].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 4].data.length === 0 ? (
                    <b>{`[${variables[index + 4].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 4].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              মোবাইল নম্বর:{" "}
              <span
                onClick={() => handleSelection(variables[index + 5].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 5].data.length === 0 ? (
                    <b>{`[${variables[index + 5].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 5].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              গ্রাহকের ঠিকানা:
              <span
                onClick={() => handleSelection(variables[index + 6].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 6].data.length === 0 ? (
                    <b>{`[${variables[index + 6].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 6].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              পণ্য ব্র্যান্ড:{" "}
              <span
                onClick={() => handleSelection(variables[index + 7].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {" "}
                <b>
                  {variables[index + 7].data.length === 0 ? (
                    <b>{`[${variables[index + 7].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 7].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              পণ্যের বিভাগ এবং তৈরি:{" "}
              <span
                onClick={() => handleSelection(variables[index + 8].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 8].data.length === 0 ? (
                    <b>{`[${variables[index + 8].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 8].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              পণ্যের মডেল:{" "}
              <span
                onClick={() => handleSelection(variables[index + 9].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {" "}
                <b>
                  {variables[index + 9].data.length === 0 ? (
                    <b>{`[${variables[index + 9].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 9].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              স্কিম কোড:
              <span
                onClick={() => handleSelection(variables[index + 10].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 10].data.length === 0 ? (
                    <b>{`[${variables[index + 10].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 10].data}`}</b>
                  )}
                </b>
              </span>
              এবং ইএমআই:
              <span
                onClick={() => handleSelection(variables[index + 11].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 11].data.length === 0 ? (
                    <b>{`[${variables[index + 11].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 11].data}`}</b>
                  )}
                </b>
              </span>{" "}
            </p>
            <br />

            <br />

            <table className="text-black text-center">
              <thead>
                <tr>
                  <th>বিস্তারিত</th>
                  <th>টাকায় পরিমাণ</th>
                  <th>টিভিএস্ দ্বারা কর্তন</th>
                  <th>টাকায় পরিমাণ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>I. পণ্যের খরচ</td>
                  <td
                    onClick={() => handleSelection(variables[index + 12].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 12].data.length === 0 ? (
                      <b>{`[${variables[index + 12].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 12].data}`}</b>
                    )}
                  </td>

                  <td>১. প্রক্রিয়াকরণ খরচ</td>
                  <td
                    onClick={() => handleSelection(variables[index + 13].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 13].data.length === 0 ? (
                      <b>{`[${variables[index + 13].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 13].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>II. মার্জিন মানি</td>
                  <td
                    onClick={() => handleSelection(variables[index + 14].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 14].data.length === 0 ? (
                      <b>{`[${variables[index + 14].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 14].data}`}</b>
                    )}
                  </td>
                  <td>২. অগ্রিম ইএমআই</td>
                  <td
                    onClick={() => handleSelection(variables[index + 15].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 15].data.length === 0 ? (
                      <b>{`[${variables[index + 15].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 15].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>III. আর্থিক পরিমাণ</td>
                  <td
                    onClick={() => handleSelection(variables[index + 16].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 16].data.length === 0 ? (
                      <b>{`[${variables[index + 16].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 16].data}`}</b>
                    )}
                  </td>
                  <td>৩. ডিলার সাবভেনশন</td>
                  <td
                    onClick={() => handleSelection(variables[index + 17].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 17].data.length === 0 ? (
                      <b>{`[${variables[index + 17].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 17].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>IV. টিভিএস্ দ্বারা কর্তন</td>
                  <td
                    onClick={() => handleSelection(variables[index + 18].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 18].data.length === 0 ? (
                      <b>{`[${variables[index + 18].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 18].data}`}</b>
                    )}
                  </td>
                  <td>৪. অন্য চার্জ যদি থাকে</td>
                  <td
                    onClick={() => handleSelection(variables[index + 19].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 19].data.length === 0 ? (
                      <b>{`[${variables[index + 19].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 19].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>V. গ্রাহকের কাছ থেকে সংগ্রহ করা মোট পরিমাণ</b>
                  </td>
                  <td
                    onClick={() => handleSelection(variables[index + 20].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 20].data.length === 0 ? (
                      <b>{`[${variables[index + 20].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 20].data}`}</b>
                    )}
                  </td>
                  <td>৫. বর্ধিত ওয়ারেন্টি</td>
                  <td
                    onClick={() => handleSelection(variables[index + 21].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 21].data.length === 0 ? (
                      <b>{`[${variables[index + 21].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 21].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>VI. নেট লোনের পরিমাণ</td>
                  <td
                    onClick={() => handleSelection(variables[index + 22].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 22].data.length === 0 ? (
                      <b>{`[${variables[index + 22].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 22].data}`}</b>
                    )}
                  </td>
                  <td>৬. বীমা</td>
                  <td
                    onClick={() => handleSelection(variables[index + 23].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 23].data.length === 0 ? (
                      <b>{`[${variables[index + 23].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 23].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>VII. চূড়ান্ত বিতরণের পরিমাণ</td>
                  <td
                    onClick={() => handleSelection(variables[index + 24].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 24].data.length === 0 ? (
                      <b>{`[${variables[index + 24].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 24].data}`}</b>
                    )}
                  </td>
                  <td>৭. সম্পদ বীমা</td>
                  <td
                    onClick={() => handleSelection(variables[index + 25].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 25].data.length === 0 ? (
                      <b>{`[${variables[index + 25].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 25].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>৮. ইন্সটা কার্ড নথিভুক্তি ফি</td>
                  <td
                    onClick={() => handleSelection(variables[index + 26].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 26].data.length === 0 ? (
                      <b>{`[${variables[index + 26].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 26].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>কর্তনের যোগফল</td>
                  <td
                    onClick={() => handleSelection(variables[index + 27].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 27].data.length === 0 ? (
                      <b>{`[${variables[index + 27].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 27].data}`}</b>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-black text-left font-bold underline">শর্তাবলী</p>
            <p className="text-black text-left">
              - পণ্য প্রকাশের আগে গ্রাহকের কাছ থেকে চূড়ান্ত বিতরণের পরিমাণের
              চেয়ে বেশি যে কোনো পরিমাণ সংগ্রহ করা হবে।
            </p>
            <p className="text-black text-left">
              - চূড়ান্ত অর্থ প্রদানের পরিমাণ আপনাকে এই স্পষ্ট বোঝার ভিত্তিতে
              প্রদান করা হবে যে গ্রাহকের কাছে আপনার দ্বারা প্রদেয়/ফেরতযোগ্য
              যেকোন সূর্য আপনার দ্বারা অর্থপ্রদান/ফেরত করা হবে, শুধুমাত্র আমাদের
              - টিভিএস্ ক্রেডিট সার্ভিসেস লিমিটেড
            </p>
            <p className="text-black text-left">
              - টিভিএস্ ক্রেডিট সার্ভিসেস লিমিটেডে চিহ্নিত HYP সহ চালানের আসল
              ফিনান্সার কপি, যথাযথভাবে প্রাপ্ত ডেলিভারির অনুলিপি।
              চালান/চালান/ডেলিভারি রসিদ/মার্জিন মানি রসিদ, স্বাক্ষর প্রুফ
              অনুযায়ী স্বাক্ষর সহ ACH এবং সমস্ত প্রাসঙ্গিক প্রি-ডিসবারসমেন্ট
              ডকুমেন্টের স্পষ্ট কপি টিভিএস্ ক্রেডিট সার্ভিসে পাঠাতে হবে,
              চূড়ান্ত বিতরণের পরিমাণ প্রক্রিয়া করার জন্য। আরও, সাথী অ্যাপটি
              প্রযোজ্য হিসাবে ইনস্টল করা উচিত।
            </p>
            <p className="text-black text-left">
              - তহবিলযুক্ত পণ্য শুধুমাত্র উপরের গ্রাহকের ঠিকানায় বিতরণ করা
              উচিত। ডেলিভারির স্থান পরিবর্তন কোন সময়েই আপ্যায়ন করা হবে না।
            </p>
            <p className="text-black text-left">
              - এই অনুমোদন পত্রটি ইস্যু হওয়ার তারিখ থেকে ১০ দিনের জন্য বৈধ এবং
              পুনর্নবীকরণ না করা পর্যন্ত স্বয়ংক্রিয়ভাবে মেয়াদ শেষ হয়ে যায়৷
              এটিকে আমাদের দ্বারা প্রত্যাহার করা যেতে পারে এটির মুদ্রা চলাকালীন
              সময়ে আপনাকে জানানোর দিনগুলির সংখ্যা পরিবর্তন করার আগে৷
            </p>
            <p className="text-black text-left">
              - যে সম্পদে সিরিয়াল নম্বরের বৈধতা বাধ্যতামূলক, সেখানে টিভিএস্
              ক্রেডিট সার্ভিসেস লিমিটেডের দায় ক্রমিক নম্বরের সফল বৈধতা পাওয়ার
              পরেই দেখা দেয়।
            </p>
            <br />
            <p className="text-black text-left font-bold underline">
              অর্থপ্রদানের শর্তাবলী
            </p>
            <p className="text-black text-left">
              - আমরা পারস্পরিকভাবে সম্মত শর্তানুযায়ী অর্থপ্রদান মুক্তি দেব।
            </p>
            <p className="text-black text-left">
              <b>উল্লেখ্য: </b>এটি কম্পিউটার দ্বারা তৈরি অনুমোদনপত্র। স্বাক্ষরের
              প্রয়োজন নেই।
            </p>
            <p
              className="text-black text-left hover:font-bold hover:shadow-md w-fit  hover:bg-slate-300 duration-300 transition cursor-pointer"
              onClick={() => handleSelection(variables[index + 28].id)}
            >
              {variables[index + 28].data.length === 0 ? (
                <b>{`[${variables[index + 28].name}]`}</b>
              ) : (
                <b>{`${variables[index + 28].data}`}</b>
              )}
            </p>
          </div>
        </div>
      )}
      {language === "hi" && (
        <div
          className="shadow-md rounded-md px-2 p-2 bg-white"
          ref={applicationRef}
        >
          <div className="w-full ">
            <img
              src="/tvslogo_2.png"
              className="w-52 object-fit"
              alt="tvs logo"
              height={50}
              width={50}
            />
          </div>
          <div className="w-full  mx-auto p-1 flex items-center justify-end">
            <div className="flex flex-col items-center">
              <p className="text-lg text-center font-bold">
                TVS Credit Services Limited
              </p>
              <p className="text-lg text-center font-bold">
                Jayalakshmi Estates, Third Floor,
              </p>
              <p className="text-lg text-center font-bold break-all">
                29, Haddows Road, Nungambakkam, Chennai
              </p>
              <p className="text-lg text-center font-bold">Tamil Nadu 600006</p>
              <p className="text-lg text-center font-bold">
                Web: www.tvscredit.com
              </p>
              <p className="text-lg text-center font-bold">
                Phone: 1800 425 3883
              </p>
              <p className="text-lg text-center font-bold">
                Email: helpdesk@tvscredit.com
              </p>
              <div className="mx-auto text-left w-2/3">
                <p className="text-black text-lg font-bold">
                  दिनांक:
                  <span
                    className="text-black text-left font-normal outline-none cursor-pointer hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition"
                    onClick={() => handleSelection(variables[index].id)}
                  >
                    {variables[index].data === "" ? (
                      <b>{`[${variables[index].name}]`}</b>
                    ) : (
                      <b>{`${variables[index].data}`}</b>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-8">
            <h2 className="text-center text-black text-2xl font-semibold underline font-serif">
              स्वीकृति पत्र
            </h2>
          </div>

          <div className="my-2 h-full p-2 text-lg    w-full">
            <p
              className="text-black text-left font-semibold hover:font-bold hover:shadow-md w-fit   hover:bg-slate-300 duration-300 transition cursor-pointer"
              onClick={() => handleSelection(variables[index + 1].id)}
            >
              {variables[index + 1].data.length === 0 ? (
                <b>{`[${variables[index + 1].name}]`}</b>
              ) : (
                <b>{`${variables[index + 1].data}`}</b>
              )}
            </p>
            <p className="text-black text-left">महोदय / महोदया,</p>
            <p className="text-black text-left">
              विषय : स्वीकृति पत्र -{" "}
              <span
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                onClick={() => handleSelection(variables[index + 2].id)}
              >
                {variables[index + 2].data.length === 0 ? (
                  <b>{`[${variables[index + 2].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 2].data}`}</b>
                )}
              </span>{" "}
              डीलर प्रतिलिपि{" "}
            </p>
            <br />
            <p className="text-black text-left">
              हमने अपने ग्राहक{" "}
              <span
                onClick={() => handleSelection(variables[index + 4].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {variables[index + 4].data.length === 0 ? (
                  <b>{`[${variables[index + 4].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 4].data}`}</b>
                )}
              </span>
              को{" "}
              <span
                onClick={() => handleSelection(variables[index + 3].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {variables[index + 3].data.length === 0 ? (
                  <b>{`[${variables[index + 3].name}]`}</b>
                ) : (
                  <b>{`${variables[index + 3].data}`}</b>
                )}
              </span>
              . की खरीद के लिए एक ऋण सुविधा मंजूर की है। ऋण सुविधा के संबंध में
              ग्राहक द्वारा हमारे पक्ष में निष्पादित समझौते के अनुसार और ग्राहक
              के निर्देशों के आधार पर हम आपके पक्ष में निम्नलिखित राशि का वितरण
              कर रहे हैं।
            </p>
            <br />
            <p className="text-black text-left">
              कृपया नीचे दिए गए पते पर ग्राहक को उत्पाद की डिलीवरी की व्यवस्था
              करें।
            </p>
            <p className="text-black text-left">
              ग्राहक का नाम:{" "}
              <span
                onClick={() => handleSelection(variables[index + 4].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 4].data.length === 0 ? (
                    <b>{`[${variables[index + 4].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 4].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              मोबाइल नंबर:{" "}
              <span
                onClick={() => handleSelection(variables[index + 5].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 5].data.length === 0 ? (
                    <b>{`[${variables[index + 5].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 5].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              ग्राहक का पता:
              <span
                onClick={() => handleSelection(variables[index + 6].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 6].data.length === 0 ? (
                    <b>{`[${variables[index + 6].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 6].data}`}</b>
                  )}
                </b>
              </span>
            </p>

            <p className="text-black text-left">
              उत्पाद ब्रांड:{" "}
              <span
                onClick={() => handleSelection(variables[index + 7].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {" "}
                <b>
                  {variables[index + 7].data.length === 0 ? (
                    <b>{`[${variables[index + 7].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 7].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              उत्पाद श्रेणी और मेक:{" "}
              <span
                onClick={() => handleSelection(variables[index + 8].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 8].data.length === 0 ? (
                    <b>{`[${variables[index + 8].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 8].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              उत्पाद मॉडल:{" "}
              <span
                onClick={() => handleSelection(variables[index + 9].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                {" "}
                <b>
                  {variables[index + 9].data.length === 0 ? (
                    <b>{`[${variables[index + 9].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 9].data}`}</b>
                  )}
                </b>
              </span>
            </p>
            <p className="text-black text-left">
              योजना कोड:
              <span
                onClick={() => handleSelection(variables[index + 10].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 10].data.length === 0 ? (
                    <b>{`[${variables[index + 10].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 10].data}`}</b>
                  )}
                </b>
              </span>
              और ईएमआई:
              <span
                onClick={() => handleSelection(variables[index + 11].id)}
                className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
              >
                <b>
                  {variables[index + 11].data.length === 0 ? (
                    <b>{`[${variables[index + 11].name}]`}</b>
                  ) : (
                    <b>{`${variables[index + 11].data}`}</b>
                  )}
                </b>
              </span>{" "}
            </p>
            <br />

            <br />

            <table className="text-black text-center">
              <thead>
                <tr>
                  <th>विवरण</th>
                  <th>राशि रुपये में</th>
                  <th>टीवीएस द्वारा कटौतियां</th>
                  <th>राशि रुपये में</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>I. सामान का मूल्य</td>
                  <td
                    onClick={() => handleSelection(variables[index + 12].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 12].data.length === 0 ? (
                      <b>{`[${variables[index + 12].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 12].data}`}</b>
                    )}
                  </td>

                  <td>१. प्रक्रिया शुल्क</td>
                  <td
                    onClick={() => handleSelection(variables[index + 13].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 13].data.length === 0 ? (
                      <b>{`[${variables[index + 13].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 13].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>II. मार्जिन मनी</td>
                  <td
                    onClick={() => handleSelection(variables[index + 14].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 14].data.length === 0 ? (
                      <b>{`[${variables[index + 14].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 14].data}`}</b>
                    )}
                  </td>
                  <td>२. अग्रिम ईएमआई</td>
                  <td
                    onClick={() => handleSelection(variables[index + 15].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 15].data.length === 0 ? (
                      <b>{`[${variables[index + 15].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 15].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>III. वित्त राशि</td>
                  <td
                    onClick={() => handleSelection(variables[index + 16].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 16].data.length === 0 ? (
                      <b>{`[${variables[index + 16].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 16].data}`}</b>
                    )}
                  </td>
                  <td>३. डीलर सबवेंशन</td>
                  <td
                    onClick={() => handleSelection(variables[index + 17].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 17].data.length === 0 ? (
                      <b>{`[${variables[index + 17].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 17].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>IV. टीवीएस द्वारा कटौतियां</td>
                  <td
                    onClick={() => handleSelection(variables[index + 18].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 18].data.length === 0 ? (
                      <b>{`[${variables[index + 18].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 18].data}`}</b>
                    )}
                  </td>
                  <td>४. अन्य शुल्क यदि कोई हो</td>
                  <td
                    onClick={() => handleSelection(variables[index + 19].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 19].data.length === 0 ? (
                      <b>{`[${variables[index + 19].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 19].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>V. ग्राहक से एकत्र की जाने वाली कुल राशि</b>
                  </td>
                  <td
                    onClick={() => handleSelection(variables[index + 20].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 20].data.length === 0 ? (
                      <b>{`[${variables[index + 20].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 20].data}`}</b>
                    )}
                  </td>
                  <td>५. विस्तारित वारंटी</td>
                  <td
                    onClick={() => handleSelection(variables[index + 21].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 21].data.length === 0 ? (
                      <b>{`[${variables[index + 21].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 21].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>VI. शुद्ध ऋण राशि</td>
                  <td
                    onClick={() => handleSelection(variables[index + 22].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 22].data.length === 0 ? (
                      <b>{`[${variables[index + 22].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 22].data}`}</b>
                    )}
                  </td>
                  <td>६. बीमा</td>
                  <td
                    onClick={() => handleSelection(variables[index + 23].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 23].data.length === 0 ? (
                      <b>{`[${variables[index + 23].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 23].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>VII. अंतिम संवितरण राशि</td>
                  <td
                    onClick={() => handleSelection(variables[index + 24].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 24].data.length === 0 ? (
                      <b>{`[${variables[index + 24].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 24].data}`}</b>
                    )}
                  </td>
                  <td>७. संपत्ति बीमा</td>
                  <td
                    onClick={() => handleSelection(variables[index + 25].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 25].data.length === 0 ? (
                      <b>{`[${variables[index + 25].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 25].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>८. इंस्टा कार्ड नामांकन शुल्क</td>
                  <td
                    onClick={() => handleSelection(variables[index + 26].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 26].data.length === 0 ? (
                      <b>{`[${variables[index + 26].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 26].data}`}</b>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>कटौती का योग</td>
                  <td
                    onClick={() => handleSelection(variables[index + 27].id)}
                    className="hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer"
                  >
                    {variables[index + 27].data.length === 0 ? (
                      <b>{`[${variables[index + 27].name}]`}</b>
                    ) : (
                      <b>{`${variables[index + 27].data}`}</b>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-black text-left font-bold underline">शर्तें</p>
            <p className="text-black text-left">
              - अंतिम संवितरण राशि से अधिक कोई भी राशि उत्पाद के जारी होने से
              पहले ग्राहक से एकत्र की जानी है।
            </p>
            <p className="text-black text-left">
              - अंतिम संवितरण राशि का भुगतान आपको इस स्पष्ट समझ पर किया जाएगा कि
              ग्राहक को आपके द्वारा देय/वापसी योग्य किसी भी राशि का भुगतान/वापसी
              केवल टीवीएस क्रेडिट सर्विसेज लिमिटेड को किया जाएगा।
            </p>
            <p className="text-black text-left">
              - टीवीएस क्रेडिट सर्विसेज लिमिटेड को चिह्नित एचवाईपी के साथ चालान
              की मूल फाइनेंसर प्रति, विधिवत प्राप्त डिलीवरी की प्रति।
              चालान/चालान/डिलीवरी रसीद/मार्जिन मनी रसीद, हस्ताक्षर प्रमाण के
              अनुसार हस्ताक्षर के साथ एसीएच और सभी प्रासंगिक पूर्व संवितरण अंतिम
              संवितरण राशि को संसाधित करने के लिए दस्तावेजों की स्पष्ट प्रति
              टीवीएस क्रेडिट सर्विसेज को भेजी जानी चाहिए। इसके अलावा, साथी ऐप
              होना चाहिए लागू के रूप में स्थापित
            </p>
            <p className="text-black text-left">
              - वित्त पोषित उत्पाद केवल उपरोक्त ग्राहक पते पर वितरित किया जाना
              चाहिए। डिलीवरी के स्थान में परिवर्तन पर विचार नहीं किया जाएगा किसी
              भी समय।
            </p>
            <p className="text-black text-left">
              - यह स्वीकृति पत्र जारी होने की तारीख से १० दिनों के लिए वैध है और
              जब तक नवीनीकरण नहीं किया जाता है तब तक स्वतः समाप्त हो जाता है।
              इसे रद्द भी किया जा सकता है हमें इसके दौरान मुद्रा में डिलीवरी से
              पहले आपको सूचित करते हुए दिनों की संख्या बदल दी जाती है।
            </p>
            <p className="text-black text-left">
              - संपत्तियां जहां सीरियल नंबर सत्यापन अनिवार्य है, टीवीएस क्रेडिट
              सर्विसेज लिमिटेड की देयता केवल सफल सत्यापन के बाद उत्पन्न होती है
              क्रमांक।
            </p>
            <br />
            <p className="text-black text-left font-bold underline">
              भुगतान शर्तें
            </p>
            <p className="text-black text-left">
              - हम पारस्परिक रूप से सहमत शर्तों के अनुसार भुगतान जारी करेंगे।
            </p>
            <p className="text-black text-left">
              <b>टिप्पणी: </b>यह कंप्यूटर जनित स्वीकृति पत्र हस्ताक्षर की
              आवश्यकता नहीं है।
            </p>
            <p
              className="text-black text-left hover:font-bold hover:shadow-md w-fit  hover:bg-slate-300 duration-300 transition cursor-pointer"
              onClick={() => handleSelection(variables[index + 28].id)}
            >
              {variables[index + 28].data.length === 0 ? (
                <b>{`[${variables[index + 28].name}]`}</b>
              ) : (
                <b>{`${variables[index + 28].data}`}</b>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorComponent;
