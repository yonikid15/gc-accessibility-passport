import { ExclamationCircleIcon } from "@heroicons/react/outline";
import * as React from "react";
import { useIntl } from "react-intl";
import Alert from "../../components/Alert";
import EditForm from "../../components/EditForm";
import { Checklist, Input, TextArea } from "../../components/formComponents";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
import useUser from "../../lib/useUser";
import { errorMessages } from "../../messages";

const Edit: React.FunctionComponent = () => {
  useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });
  const intl = useIntl();

  const examples = [
    {
      label: intl.formatMessage({ defaultMessage: "Example Resource #1" }),
      value: "1",
    },
    {
      label: intl.formatMessage({ defaultMessage: "Example Resource #2" }),
      value: "2",
    },
    {
      label: intl.formatMessage({ defaultMessage: "Example Resource #3" }),
      value: "3",
    },
  ];

  const checklists = [
    {
      title: intl.formatMessage({ defaultMessage: "Link to work situations" }),
      description: intl.formatMessage({
        defaultMessage:
          "Below you can select from the work situations in your passport to create a link between this barrier and that work situation. You can create and link these later too.",
      }),
      legend: intl.formatMessage({
        defaultMessage: "Select one or more situations...",
      }),
      name: "situations",
    },
    {
      title: intl.formatMessage({ defaultMessage: "Link to barriers" }),
      description: intl.formatMessage({
        defaultMessage:
          "Below you can select from the barriers in your passport to create a link between this solution and that barrier. You can create and link these later too.",
      }),
      legend: intl.formatMessage({
        defaultMessage: "Select one or more barriers...",
      }),
      name: "barriers",
    },
    {
      title: intl.formatMessage({ defaultMessage: "Link to solutions" }),
      description: intl.formatMessage({
        defaultMessage:
          "Below you can select from the solutions in your passport to create a link between this document and that solution. You can create and link these later too.",
      }),
      legend: intl.formatMessage({
        defaultMessage: "Select one or more solutions...",
      }),
      name: "solutions",
    },
  ];
  return (
    <Layout
      center
      title={intl.formatMessage({ defaultMessage: "Upload a file/document" })}
      headTitle={intl.formatMessage({
        defaultMessage: "Upload a File/Document - GC Accessibility Passport",
      })}
    >
      <Page
        data-h2-justify-content="b(center)"
        data-h2-flex-direction="b(column)"
      >
        <div data-h2-width="s(50)" style={{ margin: "auto" }}>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({
              defaultMessage: "File information",
            })}
          </h2>
          <Alert
            icon={<ExclamationCircleIcon style={{ width: "1.25rem" }} />}
            message={intl.formatMessage({
              defaultMessage:
                "Please ensure that you do not upload any personal or medical information using this form.",
            })}
          />
          <EditForm>
            <div>
              <Input
                id="name"
                name="name"
                type="text"
                label={intl.formatMessage({
                  defaultMessage: "Document name",
                })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
              <TextArea
                id="description"
                name="description"
                label={intl.formatMessage({
                  defaultMessage: "Document description",
                })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
                rows={10}
              />
              <Input
                id="file"
                name="file"
                type="file"
                label={intl.formatMessage({
                  defaultMessage: "Upload file",
                })}
              />
              {checklists.map(({ legend, description, title, name }) => (
                <div key={title} data-h2-margin="b(top-bottom, xl)">
                  <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
                    {title}
                  </h2>
                  <p>{description}</p>
                  <Checklist
                    idPrefix={name}
                    legend={legend}
                    name={name}
                    items={examples}
                  />
                </div>
              ))}
            </div>
          </EditForm>
        </div>
      </Page>
    </Layout>
  );
};

export default Edit;
